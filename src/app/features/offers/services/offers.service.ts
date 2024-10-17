import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { exempleOffers } from '../mocks/exemple-offers';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  getJobsByCodeRome(codeRome: string) {
    this.isLoading$.next(true);
    console.log(codeRome);

    setTimeout(() => {
      this.isLoading$.next(false);
    }, 1000);

    return new BehaviorSubject<Offer[]>(exempleOffers);
  }
}
