import { ChangeDetectorRef, Component, EventEmitter, Output, output } from '@angular/core';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { Login } from '../login/login';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,Login],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

 cartItems:any[]=[];
 showLogin:boolean= false;

 constructor(private cartService:CartService,
  private auth:Auth,
  private router:Router,
  private cd:ChangeDetectorRef
 ){
  this.showLogin=false;
 }

 ngOnInit(){
   this.loadCart();
 }

 loadCart(){
   this.cartItems=this.cartService.getCart();
   this.cd.detectChanges();
 }

 increase(id:number){
   this.cartService.increaseQty(id);
   this.loadCart();
   this.cd.detectChanges();
 }

 decrease(id:number){
   this.cartService.decreaseQty(id);
   this.loadCart();
   this.cd.detectChanges();
 }

 getTotal(){
   return this.cartItems.reduce((t,i)=>t+i.price*i.quantity,0);
 }

 checkout(){
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/checkout']);
    } else {
      this.showLogin=true;
    }
 }

  closeCart(){
    this.router.navigate(['/']);
  }

  removeProduct(id:number){
    alert("Removed from cart");
    this.cartService.removeItem(id);
    this.loadCart();
    this.cd.detectChanges();
  }

  moveToWishlist(id:number){
    alert("Moved to wishlist");
    this.cartService.removeItem(id);
    this.loadCart();
    this.cd.detectChanges();
  }

}
