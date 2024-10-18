import { Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home/ui/containers/home-container/home-container.component';
import { FavoritesListComponent } from './features/favorites/ui/favorite-list/favorites-list.component';
import { SignupComponent } from '../../src/app/features/sign/ui/containers/signUp-container/signup-container.component';
import { SigninComponent } from '../../src/app/features/sign/ui/containers/signIn-container/signin-container.component';
import { SearchJobComponent } from './features/search/ui/containers/search-job/search-job.component';
import { OffersListComponent } from './features/offers/ui/containers/offers-list/offers-list.component';
import { OffersSheetComponent } from './features/offers/ui/containers/offers-sheet/offers-sheet.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'search',
    component: SearchJobComponent,
  },
  {
    path: 'favoris',
    component: FavoritesListComponent,
  },
  {
    path: 'offers/:codeRome/:libelleRome',
    component: OffersListComponent,
  },
  {
    path: 'details/:id',
    component: OffersSheetComponent,
  }
  
];
