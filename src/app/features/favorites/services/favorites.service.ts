import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobsCodeInterface } from '../../search/models/job-code.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private apiUrl = 'URL_DE_VOTRE_API/favorites'; 

  constructor(private http: HttpClient) {}

  getFavorites(): Observable<JobsCodeInterface[]> {
    return this.http.get<JobsCodeInterface[]>(this.apiUrl);
  } 
}
