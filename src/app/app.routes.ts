import { Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home/ui/containers/home-container/home-container.component';
import { FavoritesContainerComponent } from './features/favorites/favorites-container/favorites-container.component';
import { SignupComponent } from '../../src/app/features/sign/ui/containers/signUp-container/signup-container.component';
import { SigninComponent } from '../../src/app/features/sign/ui/containers/signIn-container/signin-container.component';
import { SearchJobComponent } from './features/search/ui/containers/search-job/search-job.component';
import { JobsListComponent } from './features/jobs/ui/containers/jobs-list/jobs-list.component';

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
    path: 'jobs/:codeRome',
    component: JobsListComponent,
  },
];
