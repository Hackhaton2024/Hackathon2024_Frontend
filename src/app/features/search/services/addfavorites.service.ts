import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddFavoritesService {
  private apiUrl = 'https://ton-api.com/favorites'; // Remplace par ton URL d'API

  constructor(private http: HttpClient) {}

  addFavorite(job: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, job, { headers });
  }
}
