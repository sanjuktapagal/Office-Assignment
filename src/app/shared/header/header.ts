import { Component } from '@angular/core';
import { CartService } from '../../services/cart';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Products } from '../../pages/products/products';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, Products],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(
    public cartService: CartService,
    public authService: Auth,
    private router: Router,
  ) {}

  logout() {
    this.authService.logout();
  }

  OpenCart() {
    this.router.navigate(['/cart']);
  }
}
