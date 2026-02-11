import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/cartservice';
import { resolveAssetUrl } from '../config/api.config';
import { CurrencyDisplayPipe } from '../shared/currency-display.pipe';

@Component({
  selector: 'app-cart-details',
  imports: [CommonModule, CurrencyDisplayPipe],
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

get subtotal(): number {
  return this.cart.getConvertedTotal();
}

get gst(): number {
  return this.cart.getGstAmount();
}

get grandTotal(): number {
  return this.cart.getGrandTotal();
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
    this.router.navigate(['/shipping']);
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
