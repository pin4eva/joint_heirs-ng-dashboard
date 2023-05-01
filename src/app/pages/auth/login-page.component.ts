import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginInput } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import 'rxjs/operators';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class LoginComponent {
  constructor(private readonly authService: AuthService) {}

  input: LoginInput = { email: '', password: '' };
  loading = false;
  errorMessage = '';

  async login(form: NgForm) {
    try {
      this.loading = true;
      this.authService.login(this.input).subscribe({
        next: (data) => {
          localStorage.setItem('token', data.token);
          // sessionStorage.setItem('token', data.token);
          form.reset();
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = err.error.message;
        },
      });
    } catch (error) {
      console.log('LOGIN_ERROR:', error?.['message' as keyof {}]);
    } finally {
      this.loading = false;
    }
  }
}
