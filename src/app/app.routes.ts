import { Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home/ui/containers/home-container/home-container.component';
import { FavoritesContainerComponent } from './features/design/ui/containers/favorites-container/favorites-container.component';
import { SignupComponent } from './features/signUp/ui/containers/signUp-container/signup-container.component';
import { SigninComponent } from './features/signIn/ui/containers/signIn-container/signin-container.component';
import { SearchJobComponent } from './features/search/ui/containers/search-job/search-job.component';
import { OffersListComponent } from './features/offers/ui/containers/offers-list/offers-list.component';

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
    component: FavoritesContainerComponent,
  },
  {
    path: 'offers/:codeRome/:libelleRome',
    component: OffersListComponent,
  },
];
