import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { login } from '../login/login';
import { LoginService } from '../login/services/loginservices';
import { CartService } from '../cart-details/services/cartservice';
import { resolveAssetUrl } from '../config/api.config';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl:'./checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

 items : any[] = [];

  totalAmount : number = 0;
  gstAmount : number = 0;
  grandTotal : number = 0;
  totalItems: number = 0;
  showDialog: boolean = false;
  resolveImageUrl = resolveAssetUrl;
  private cartSub?: Subscription;
  
  constructor(private cartService : CartService, private router:Router, public loginService: LoginService) {}

  ngOnInit():void{
    this.cartSub = this.cartService.cart$.subscribe(items => {
      this.items = items;
      this.calculateTotals();
    });
    // also initialize once in case cart$ has current value
    this.items = this.cartService.getItems();
    this.calculateTotals();
  }
  removeItem(index:number){
    this.cartService.removeFromCart(index);
    this.items = this.cartService.getItems();
    this.calculateTotals();
  }
  clearCart(){
    this.cartService.clearCart();
    this.items = [];
    this.calculateTotals();
  }
  calculateTotals(){
    this.totalAmount = this.cartService.getTotal();
    this.gstAmount = this.totalAmount * 0.18;
    this.grandTotal = this.totalAmount + this.gstAmount; 
    this.totalItems = this.cartService.getItemCount();
   }

   ngOnDestroy(): void {
    this.cartSub?.unsubscribe();
   }

   buyNow() {
  this.router.navigate(['/payments'], {
    state: {
      items: this.items,
      total: this.grandTotal,
      address: {
        firstName: 'Manoj',
        lastName: 'Karthik',
        street: 'Ameerpet',
        city: 'Hyderabad',
        state: 'Telangana',
        postal: '500016'
      }
    }
  });
}
    confirmPurchase() {
    this.clearCart();
    this.showDialog = false;
  
  }

  closeDialog() {
    this.showDialog = false;
  }
   closePopup(){
    this.router.navigate(['/menu']);
   }

}
