import { Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home/ui/containers/home-container/home-container.component';
import {FavoritesContainerComponent } from './features/design/ui/containers/favorites-container/favorites-container.component'; 

export const routes: Routes = [
    {
        path: '',
        component: HomeContainerComponent
    },
    // {
    //     path: 'signUp',
    //      component: signInContainerComponent
    // },
    // {
    //     path: 'signIn',
    //      component: signUpContainerComponent
    // },
    {
        path: 'search',
        component: FavoritesContainerComponent
    },
    {
        path: 'favoris',
        component: FavoritesContainerComponent
    },
   
];
