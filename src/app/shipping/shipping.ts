import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ShippingService } from './services/shipping.service';
import { LoginService } from '../login/services/loginservices';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart-details/services/cartservice';
import { resolveAssetUrl } from '../config/api.config';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css',
})
export class Shipping implements OnInit, OnDestroy {
  items: any[] = [];
  totalAmount = 0;
  gstAmount = 0;
  grandTotal = 0;
  totalItems = 0;
  resolveImageUrl = resolveAssetUrl;
  private cartSub?: Subscription;

  shipping = {
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'India',
    phone: ''
  };

  showDialog = false;

  constructor(
    private shippingService: ShippingService,
    public loginService: LoginService,
    private cartService: CartService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(items => {
      this.items = items;
      this.calculateTotals();
    });

    // initial load
    this.items = this.cartService.getItems();
    this.calculateTotals();
  }

  calculateTotals() {
    this.totalAmount = this.cartService.getTotal();
    this.totalItems = this.cartService.getCount();
    this.gstAmount = this.totalAmount * 0.18;
    this.grandTotal = this.totalAmount + this.gstAmount;
  }

  buyNow() {
    if (
      !this.shipping.firstName ||
      !this.shipping.address ||
      !this.shipping.city ||
      !this.shipping.state ||
      !this.shipping.postal_code
    ) {
      alert('Please fill all required shipping fields');
      return;
    }

    const userId = this.loginService.getUserId();
    if (!userId) {
      alert('Please login before placing the order.');
      return;
    }

    const payload = {
      user_id: userId,
      address: `${this.shipping.firstName} ${this.shipping.lastName}, ${this.shipping.address}, ${this.shipping.apartment}`,
      city: this.shipping.city,
      state: this.shipping.state,
      postal_code: this.shipping.postal_code,
      country: this.shipping.country,
      phone: this.shipping.phone
    };

    this.shippingService.addShipping(payload).subscribe({
      next: () => {
        this.showDialog = true;
        this.detectChangesSafe();
      },
      error: (err) => {
        console.error('Shipping save failed', err);
        if (err?.status === 401) {
          alert('Your session token is invalid for shipping. Please login again.');
          this.loginService.logout();
          this.router.navigate(['/login']);
          return;
        }
        alert('Failed to save shipping address');
      }
    });
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  closeDialog() {
    this.showDialog = false;
    this.detectChangesSafe();
  }

  confirmPurchase() {
    this.showDialog = false;
    this.detectChangesSafe();
  }

  ngOnDestroy(): void {
    this.cartSub?.unsubscribe();
  }

  private detectChangesSafe(): void {
    try {
      this.cdr.detectChanges();
    } catch {
      // no-op if view already destroyed
    }
  }
}
