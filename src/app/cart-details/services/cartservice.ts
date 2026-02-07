
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_BASE_URL } from "../../config/api.config";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private key = 'cart-key';
  private items: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  private apiUrl = `${API_BASE_URL}/api/cart`;

  private readonly RECENT_KEY = 'recently_viewed_products';
  private readonly MAX_ITEMS = 8;

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem(this.key);
    if (stored) {
      this.items = JSON.parse(stored);
      this.cartSubject.next(this.items);
    }

    // If user already logged in (page refresh), hydrate cart from backend
    const sessionToken = sessionStorage.getItem('token');
    const sessionUserId = sessionStorage.getItem('userId') || this.getUserIdFromSession();
    if (sessionToken && sessionUserId) {
      this.loadCartForUser(Number(sessionUserId), sessionToken);
    }
  }
  mergeCartAfterLogin(user_Id: number, token: string) {
  const items = this.getItems();

  if (!items || items.length === 0) {
    console.log("No local items to sync.");
    return;
  }

  items.forEach(item => {

    if (!item.product_id) {
      console.warn("Skipping invalid item:", item);
      return;
    }

    const payload = {
      user_id: user_Id,
      product_id: item.product_id,
      quantity: item.quantity || 1
    };

    console.log("SENDING PAYLOAD:", payload);

    this.http.post(this.apiUrl, payload).subscribe({
      next: res => console.log("Added to DB:", res),
      error: err => console.error("Error saving:", err)
    });

  });

  console.log("All local cart items synced to DB.");
}


  addRecentlyViewed(product: any) {
    if (!product?.product_id) return;

    let items = JSON.parse(localStorage.getItem(this.RECENT_KEY) || '[]');

    items = items.filter((p: any) => p.product_id !== product.product_id);

    items.unshift({
      product_id: product.product_id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      category_id: product.category_id
    });

    if (items.length > this.MAX_ITEMS) {
      items = items.slice(0, this.MAX_ITEMS);
    }

    localStorage.setItem(this.RECENT_KEY, JSON.stringify(items));
  }

  getRecentlyViewed(): any[] {
    return JSON.parse(localStorage.getItem(this.RECENT_KEY) || '[]');
  }

  addToCart(item: any) {
    if (!item?.product_id) return;

    const userIdStr = sessionStorage.getItem('userId') || this.getUserIdFromSession();
    const token = sessionStorage.getItem('token');
    const isLoggedIn = !!userIdStr && !!token;

    const qty = item.quantity > 0 ? item.quantity : 1;

    const existing = this.items.find(i => i.product_id === item.product_id);

    if (existing) {
      existing.quantity += qty;
      this.saveItems();

      if (isLoggedIn && existing.cart_item_id) {
        this.updateQuantity(existing.cart_item_id, existing.quantity, token);
      }
      return;
    }

    if (!isLoggedIn) {
      this.items.push({ ...item, quantity: qty });
      this.saveItems();
      return;
    }

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    const payload = {
      user_id: Number(userIdStr),
      product_id: item.product_id,
      quantity: qty
    };

    this.http.post<any>(this.apiUrl, payload, { headers }).subscribe(res => {
      this.items.push({
        cart_item_id: res.cart_item_id,
        ...item,
        quantity: qty
      });
      this.saveItems();
    });
  }

  removeFromCart(index: number, user_Id?: number, token?: string): void {
    if (index >= 0 && index < this.items.length) {
      const removedItem = this.items[index];
      this.items.splice(index, 1);
      this.saveItems();

      const resolvedUserId = user_Id ?? Number(sessionStorage.getItem('userId') || this.getUserIdFromSession());
      const resolvedToken = token ?? sessionStorage.getItem('token');

      if (resolvedUserId && removedItem?.product_id && resolvedToken) {
        const headers = new HttpHeaders({ Authorization: `Bearer ${resolvedToken}` });

        this.http
          .delete(`${this.apiUrl}/${resolvedUserId}/${removedItem.product_id}`, { headers })
          .subscribe({
            next: res => console.log('Cart item removed from backend:', res),
            error: err => console.error('Error removing from backend:', err),
          });
      }
      this.cartSubject.next(this.items);
    }
  }

  updateQuantity(cartItemId: number, quantity: number, tokenOverride?: string) {
    const item = this.items.find(i => i.cart_item_id === cartItemId);
    if (item) {
      item.quantity = quantity;
      this.saveItems();
    }

    const token = tokenOverride || sessionStorage.getItem("token");
    if (!token) return;

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http.put(`${this.apiUrl}/${cartItemId}`, { quantity }, { headers }).subscribe();
  }

  // loadCartForUser(userId: number, token: string) {
  //   const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

  //   this.http.get<any[]>(`${this.apiUrl}/user/${userId}`, { headers }).subscribe(rows => {     
  //     this.items = rows.map(row => ({
  //       cart_item_id: row.cart_item_id,
  //       product_id: row.product_id,
  //       name: row.name,
  //       price: row.price,
  //       image_url: row.image_url,
  //       quantity: row.quantity
  //     }));
  //     this.saveItems();
  //   });
  // }

  loadCartForUser(userId: number, token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

  this.http
    .get<any[]>(`${this.apiUrl}/user/${userId}`, { headers })
    .subscribe(rows => {
      this.items = rows.map(row => {
        let images: string[] = [];

        try {
          images = JSON.parse(row.images || '[]');
        } catch {
          images = [];
        }

        return {
          cart_item_id: row.cart_item_id,
          product_id: row.product_id,
          name: row.name,
          price: row.price,
          quantity: row.quantity,

          // ✅ normalize for UI
          image_url: images[0] || null,
          images
        };
      });

      this.saveItems();
    });
}

  
  private saveItems() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
    this.cartSubject.next(this.items);
  }

  getItems(): any[] {
    return this.items;
  }
  getTotal(): number {
    return this.items.reduce((sum, it) => {
      const price = parseFloat((it?.price ?? 0).toString());
      const qty = Number(it?.quantity ?? 1) || 1;
      return sum + (Number.isFinite(price) ? price * qty : 0);
    }, 0);
  }

  getItemCount(): number {
    return this.items.reduce((sum, it) => sum + (Number(it?.quantity) || 1), 0);
  }
    clearCart(localOnly = false): void {
    this.items = [];
    localStorage.removeItem(this.key);
    this.cartSubject.next([])
    if (localOnly) return;
  }

  private getUserIdFromSession(): string | null {
    const userRaw = sessionStorage.getItem('user');
    if (!userRaw) return null;
    try {
      const user = JSON.parse(userRaw);
      const id = user?.user_id || user?.id;
      if (id) {
        sessionStorage.setItem('userId', String(id));
        return String(id);
      }
    } catch {
      return null;
    }
    return null;
  }
}
