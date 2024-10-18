import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { JobsCodeInterface } from '../models/job-code.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  token!: string;
  isLoading$ = new BehaviorSubject<boolean>(false);
  jobsCodes$: BehaviorSubject<JobsCodeInterface[]> = new BehaviorSubject<
    JobsCodeInterface[]
  >([
    {
      contexte: '',
      identifiant: '123456 ',
      intitule: 'Développeur',
      metiersRome: [
        {
          codeAppellation: '11564',
          codeRome: '123',
          libelleAppellation: '',
          libelleRome: 'Développpeur web',
          scorePrediction: 0,
        },
        {
          codeAppellation: '11564',
          codeRome: '123',
          libelleAppellation: '',
          libelleRome: 'Développeur mobile',
          scorePrediction: 0,
        },
      ],

      uuidInference: '',
    },
    {
      contexte: '',
      identifiant: '123457 ',
      intitule: 'Concepteur d applications',
      metiersRome: [
        {
          codeAppellation: '11565',
          codeRome: '456',
          libelleAppellation: '',
          libelleRome: 'développeur Python',
          scorePrediction: 0,
        },
      ],
      uuidInference: '',
    },
  ]);

  constructor(private http: HttpClient) {}

  SearchJobsCode(searchTerm: string): Observable<JobsCodeInterface[]> {
    this.isLoading$.next(true);

    console.log(searchTerm);

    setTimeout(() => {
      this.isLoading$.next(false);
    }, 1000);
    return this.jobsCodes$;
  }

  requestJobsCode(searchTerm: string): Observable<JobsCodeInterface[]> {
    this.isLoading$.next(true);
    return this.http
      .post<JobsCodeInterface[]>('http://localhost:8080/api/romeo', {
        searchTerm,
      })
      .pipe(finalize(() => this.isLoading$.next(false)));
  }
}
