import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

  constructor(private router:Router,
    private cartService:CartService
  ){
    alert("Order placed successfully!");
     this.cartService.resetCart();
     this.router.navigate(['/']);
  }


  // placeOrder(){
    
  // }
}
