import { Component, OnInit } from '@angular/core';
import { ShippingService } from './services/shipping.service';
import { LoginService } from '../login/services/loginservices';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css',
})
export class Shipping implements OnInit {

  // Cart / summary data
  items: any[] = [];
  totalAmount = 0;
  gstAmount = 0;
  grandTotal = 0;

  // Shipping form model
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
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    if (!this.loginService.isLoggedIn()) {
      alert('Please login first');
      return;
    }

    this.loadCart();
    this.calculateTotals();
  }

  // 🔹 Load cart items
  loadCart() {
    const cart = localStorage.getItem('cart');
    this.items = cart ? JSON.parse(cart) : [];
  }

  // 🔹 Calculate totals
  calculateTotals() {
    this.totalAmount = this.items.reduce(
      (sum, item) => sum + (item.price * (item.quantity || 1)),
      0
    );

    this.gstAmount = this.totalAmount * 0.18;
    this.grandTotal = this.totalAmount + this.gstAmount;
  }

  // 🔥 BUY NOW = SAVE SHIPPING
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

    // ✅ NO user_id here
    const payload = {
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
      },
      error: (err) => {
        console.error('Shipping save failed', err);
        alert('Failed to save shipping address');
      }
    });
  }

  // 🔹 Remove item from cart
  removeItem(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.calculateTotals();
  }

  closeDialog() {
    this.showDialog = false;
  }

  confirmPurchase() {
    this.showDialog = false;
    // next → payment / order confirmation
  }
}
