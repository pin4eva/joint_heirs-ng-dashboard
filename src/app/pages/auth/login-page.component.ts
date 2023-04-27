import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginInput } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/services/auth.service';

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
          console.log(data);
        },
        error: (error) => {
          this.errorMessage = error?.error?.message;
        },
        complete: () => {
          this.loading = false;
        },
      });
    } catch (error) {
      console.log('LOGIN_ERROR:', error?.['message' as keyof {}]);
    } finally {
      this.loading = false;
    }
  }
}
