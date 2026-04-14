import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  saveCart(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(product: any, map: Map<number, number>) {
    let cart = this.getCart();

    let existing = cart.find((p: any) => p.id === product.id);

    if (existing) {
      existing.quantity += map.get(product.id) || 1;
    } else {
      product.quantity = map.get(product.id) || 1;
      cart.push(product);
    }

    this.saveCart(cart);
  }

  increaseQty(id: number) {
    let cart = this.getCart();

    cart.forEach((item: any) => {
      if (item.id === id) {
        item.quantity++;
        console.log(
          'Increased quantity for item with id:',
          item.id,
          'New quantity:',
          item.quantity,
        );
      }
    });

    this.saveCart(cart);
  }

  decreaseQty(id: number) {
    let cart = this.getCart();

    cart.forEach((item: any) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity--;
      }
    });

    this.saveCart(cart);
  }

  removeItem(id: number) {
    let cart = this.getCart().filter((item: any) => item.id !== id);

    this.saveCart(cart);
  }

  getCartCount() {
    let cart = this.getCart();
    return cart.reduce((total: number, item: any) => total + item.quantity, 0);
  }

  resetCart() {
    localStorage.removeItem('cart');
  }
}
