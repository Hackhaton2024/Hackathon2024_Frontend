import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobsCodeInterface } from '../models/job-code.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  token!: string;
  jobsCodes: BehaviorSubject<JobsCodeInterface[]> = new BehaviorSubject<
    JobsCodeInterface[]
  >([
    {
      contexte: '',
      identifiant: '123456 ',
      intitule: 'Boucher',
      metiersRome: [
        {
          codeAppellation: '11564',
          codeRome: '123',
          libelleAppellation: '',
          libelleRome: 'Boucher',
          scorePrediction: 0,
        },
        {
          codeAppellation: '11564',
          codeRome: '123',
          libelleAppellation: '',
          libelleRome: 'Chef boucher',
          scorePrediction: 0,
        },
      ],

      uuidInference: '',
    },
    {
      contexte: '',
      identifiant: '123457 ',
      intitule: 'Boulanger',
      metiersRome: [
        {
          codeAppellation: '11565',
          codeRome: '456',
          libelleAppellation: '',
          libelleRome: 'Chef boulanger',
          scorePrediction: 0,
        },
      ],
      uuidInference: '',
    },
  ]);

  constructor(private http: HttpClient) {}

  getAccessToken() {
    const body = {
      grant_type: 'client_credentials',
      client_id:
        'PAR_hackathon_1d0a1fd538207c226f0fcf1e79ee5c3768f7df9947f195b8689116659a450e2e',
      client_secret:
        '5ff6ced7f38e38ad3601ecb747e7f32e66e4e623dc3dbc0ce9a4dc8040a58017',
      scope: 'api_romeov2 o2dsoffre api_offresdemploiv2',
    };
    this.http
      .post(
        'https://entreprise.francetravail.fr/connexion/oauth2/access_token?realm=%2Fpartenaire',
        body
      )
      .subscribe((response: any) => {
        console.log(response);

        this.token = response.access_token;
      });
  }

  SearchJobsCode(searchTerm: string): Observable<JobsCodeInterface[]> {
    return this.jobsCodes;
  }
}
