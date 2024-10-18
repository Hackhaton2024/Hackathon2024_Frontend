import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import {  Offer } from '../../../models/offer.model';
import { CommonModule } from '@angular/common';
import { MatTab } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { OffersService } from '../../../services/offers.service';
import { JobsFilterComponent } from "../../components/jobs-filter/jobs-filter.component";

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, JobsFilterComponent, RouterLink],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.scss',
})
export class OffersListComponent implements OnInit, OnDestroy {
  codeRome!: string;
  libelleRome!: string;
  offers!: Offer[];
  isLoading$ = this.offerService.isLoading$;
  subscription: Subscription = new Subscription();
  displayedColumns: string[] = ['code', 'intitule', 'entreprise','location', 'date'];


  constructor(
    private activatedRoute: ActivatedRoute,
    private offerService: OffersService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.activatedRoute.params.subscribe((params) => {
        this.codeRome = params['codeRome'];
        this.libelleRome = params['libelleRome'];
      })
    );

    if (this.codeRome) {
      this.subscription.add(
        this.offerService.getJobsByCodeRome(this.codeRome).subscribe((offers) => {
          this.offers = offers;
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
