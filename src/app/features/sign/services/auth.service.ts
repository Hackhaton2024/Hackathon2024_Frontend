import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:8080/api/auth/register';
  private validationUrl = 'http://localhost:8080/api/auth/activation';
  private conexionUrl = 'http://localhost:8080/api/auth/sign-in';

  constructor(private http: HttpClient) {}

  // register(user: AuthUser): Observable<string> {
  //   return this.http.post<string>(`${this.registerUrl}`,user);
  // }

  /**
   * Create user account
   * 
   * @param user 
   * @returns 
   * 
   * @atsuhikoMochizuki
   * @since 2024-10-27
   */
  register(user: AuthUser): Observable<HttpResponse<string>> {
    // Headers definitions
    const headers = new HttpHeaders({
      "Content-Type": "application/json",

    });

    return this.http.post(
      // Url
      `${this.registerUrl}`,
      // Body Request
      JSON.stringify(user),

      // Options
      {
        // Uncomment if body response is plain/text
        responseType: "text",

        // headers injection
        headers: headers,

        // Uncomment if request progression is needed
        reportProgress: true,

        // Get full Http response
        observe: "response",
      }
    );
  }

 

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.conexionUrl}`, { email, password });
  }

  validateCode(code: string): Observable<any> {
    return this.http.post(`${this.validationUrl}`, { code });
  }
}
