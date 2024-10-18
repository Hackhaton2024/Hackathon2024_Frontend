import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://10.122.06:8080/api/auth/register';
  private validationUrl ='http://10.122.06:8000/api/auth/activation';
  private conexionUrl = 'http://10.122.06:8080/api/auth/sign-in';

 
  constructor(private http: HttpClient) {}

  register(user: AuthUser): Observable<any> {
    return this.http.post(`${this.registerUrl}`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.conexionUrl}`, { email, password });
  }

  validateCode(code: string): Observable<any> {
    return this.http.post(`${this.validationUrl}`, { code });
  }
}

