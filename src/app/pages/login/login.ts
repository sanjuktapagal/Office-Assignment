import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  @Output() close = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe((res: any) => {
      this.authService.saveUser(res);
      this.close.emit();
      this.loginForm.reset();
      this.router.navigate(['/checkout']);
    });
  }
  closeLogin() {
    this.close.emit();
    this.router.navigate(['/']);
  }
}
