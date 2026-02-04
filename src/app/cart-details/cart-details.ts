import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/cartservice';
import { resolveAssetUrl } from '../config/api.config';

@Component({
  selector: 'app-cart-details',
  imports: [CommonModule],
  templateUrl: './cart-details.html',
  styleUrl: './cart-details.css',
})
export class CartDetails {

  @Input() items: any[] = [];

  @Input() isOpen = false;
  @Input() isCartOpen = false;

  @Output() close = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() remove = new EventEmitter<number>();
  resolveImageUrl = resolveAssetUrl;

  constructor(private router: Router,private cart : CartService) {}

  getItemPrice(price: any): number {
  if (!price) return 0;
  return Number(String(price).replace(/,/g, ''));
}

getTotal(): number {
  return this.items.reduce((sum, item) => {
    const price = this.getItemPrice(item.price);
    const qty = item.quantity ?? 1;
    return sum + price * qty;
  }, 0);
}


  //  getTotal(): number {
  //   return this.items.reduce((sum, it) => sum + (Number(it.price || 0) * (it.quantity || 1)), 0);
  // }

  onRemove(index: number) {
    this.remove.emit(index);
  }

  closeCart() {
    this.close.emit();
  }

  onClear() {
    this.clear.emit();
  }

  onCheck() {
    this.router.navigate(['/checkout']);
    this.
    close.emit();
  }
  
 incQty(index: number) {
  const item = this.items[index];
  if (!item) return;

  item.quantity = (item.quantity ?? 1) + 1;
  this.cart.updateQuantity(item.cart_item_id, item.quantity);
}

decQty(index: number) {
  const item = this.items[index];
  if (!item || item.quantity <= 1) return;

  item.quantity -= 1;
  this.cart.updateQuantity(item.cart_item_id, item.quantity);
}

}
