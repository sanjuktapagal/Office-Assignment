import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';
import { Checkout } from './pages/checkout/checkout';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Products },

  { path: 'cart', component: Cart },

  { path: 'login', component: Login },

  {
    path: 'checkout',
    component: Checkout,
    canActivate: [AuthGuard],
  },
];
