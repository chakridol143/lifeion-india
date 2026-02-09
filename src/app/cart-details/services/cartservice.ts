import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_BASE_URL } from "../../config/api.config";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private LOCAL_CART_KEY = 'guest_cart';
  private items: any[] = [];

  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  private apiUrl = `${API_BASE_URL}/api/cart`;

  constructor(private http: HttpClient) {
    // 🔹 Load local cart initially
    const local = localStorage.getItem(this.LOCAL_CART_KEY);
    this.items = local ? JSON.parse(local) : [];
    this.cartSubject.next(this.items);
  }

  /* =====================================================
     ADD TO CART (WORKS FOR BOTH GUEST + LOGGED IN)
  ===================================================== */
  addToCart(product: any, qty = 1) {
    if (!product?.product_id) return;

    const token = sessionStorage.getItem('token');
    const isLoggedIn = !!token;

    const existing = this.items.find(
      i => i.product_id === product.product_id
    );

    if (existing) {
      existing.quantity += qty;
      this.saveLocal();
      if (isLoggedIn && existing.cart_item_id) {
        this.updateQuantity(existing.cart_item_id, existing.quantity);
      }
      return;
    }

    // 🔹 Guest user → local only
    if (!isLoggedIn) {
      this.items.push({ ...product, quantity: qty });
      this.saveLocal();
      return;
    }

    // 🔹 Logged-in → backend
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const payload = {
      productId: product.product_id,
      quantity: qty
    };

    this.http.post<any>(this.apiUrl, payload, { headers }).subscribe(res => {
      this.items.push({
        cart_item_id: res.cart_item_id,
        ...product,
        quantity: qty
      });
      this.saveLocal();
    });
  }

  /* =====================================================
     MERGE LOCAL CART AFTER LOGIN (🔥 IMPORTANT)
  ===================================================== */
  mergeCartAfterLogin(token: string) {
    if (!this.items.length) return;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const requests = this.items.map(item => {
      return this.http.post(this.apiUrl, {
        productId: item.product_id,
        quantity: item.quantity
      }, { headers });
    });

    // 🔹 Fire all requests
    Promise.all(requests.map(r => r.toPromise()))
      .then(() => {
        console.log("✅ Guest cart synced to backend");
        this.clearLocalCart();
        this.loadCartFromBackend(token);
      })
      .catch(err => console.error("❌ Cart sync failed", err));
  }

  /* =====================================================
     LOAD CART FROM BACKEND (AFTER LOGIN / REFRESH)
  ===================================================== */
  loadCartFromBackend(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<any[]>(`${this.apiUrl}/user/me`, { headers })
      .subscribe(rows => {
        this.items = rows.map(row => ({
          cart_item_id: row.cart_item_id,
          product_id: row.product_id,
          name: row.name,
          price: row.price,
          quantity: row.quantity,
          image_url: row.image_url
        }));
        this.saveLocal();
      });
  }

  /* =====================================================
     UPDATE QUANTITY
  ===================================================== */
  updateQuantity(cartItemId: number, quantity: number) {
    const token = sessionStorage.getItem('token');
    if (!token) return;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.put(`${this.apiUrl}/${cartItemId}`, { quantity }, { headers })
      .subscribe();
  }

  /* =====================================================
     REMOVE ITEM
  ===================================================== */
  removeFromCart(index: number) {
    const removed = this.items[index];
    this.items.splice(index, 1);
    this.saveLocal();

    const token = sessionStorage.getItem('token');
    if (!token || !removed?.cart_item_id) return;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.delete(`${this.apiUrl}/${removed.cart_item_id}`, { headers })
      .subscribe();
  }

  /* =====================================================
     HELPERS
  ===================================================== */
  private saveLocal() {
    localStorage.setItem(this.LOCAL_CART_KEY, JSON.stringify(this.items));
    this.cartSubject.next(this.items);
  }

 clearLocalCart() {
  this.items = [];
  localStorage.removeItem('guest_cart');
  this.cartSubject.next([]);
}

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce(
      (sum, i) => sum + (i.price * i.quantity), 0
    );
  }

  getCount() {
    return this.items.reduce(
      (sum, i) => sum + i.quantity, 0
    );
  }
}
