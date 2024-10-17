import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Jobs } from '../models/jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }


  getJobsByCodeRome(codeRome : string) {
    return new BehaviorSubject<Jobs[]>([]);
  }

}
