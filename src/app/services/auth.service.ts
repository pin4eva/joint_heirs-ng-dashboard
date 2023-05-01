import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/user.model';
import { LoginInput } from '../model/auth.model';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = environment.API_URL;
  constructor(private readonly http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    return this.http.get<User[]>(this.API_URL + '/users');
  }

  login(input: LoginInput) {
    return this.http.post<{ token: string }>(this.API_URL + '/auth/login', input);
  }
}
