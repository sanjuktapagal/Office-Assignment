import { inject, Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

export const AuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
// @Injectable({ providedIn: 'root' })
// export class AuthGuard  {

//   constructor(private auth: Auth, private router: Router) {}

//   canActivate() {
//     if (this.auth.isLoggedIn()) return true;

//     this.router.navigate(['/']);
//     return false;
//   }
//}