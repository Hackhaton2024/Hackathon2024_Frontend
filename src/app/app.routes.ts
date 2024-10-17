import { Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home/ui/containers/home-container/home-container.component';
import {FavoritesContainerComponent } from './features/design/ui/containers/favorites-container/favorites-container.component'; 
import {SignupComponent} from '../../src/app/features/signUp/ui/containers/signUp-container/signup-container.component';
import {SigninComponent} from '../../src/app/features/signIn/ui/containers/signIn-container/signIn-container.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeContainerComponent
    },
     {
         path: 'signup',
          component: SignupComponent
     },
     {
         path: 'signin',
          component: SigninComponent
     },
    {
        path: 'search',
        component: FavoritesContainerComponent
    },
    {
        path: 'favoris',
        component: FavoritesContainerComponent
    },
   
];
