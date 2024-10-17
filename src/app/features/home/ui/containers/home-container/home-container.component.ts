import { Component } from '@angular/core';
import { DesignContainerComponent } from "../../../../design/ui/containers/design-container/design-container.component";
import {SigninComponent} from '../../../../../features/signIn/ui/containers/signIn-container/signIn-container.component';
import {FavoritesContainerComponent } from '../../../../design/ui/containers/favorites-container/favorites-container.component';
import {AuthChoiceComponent} from '../../../../../features/design/ui/containers/sign-container/sign-container.component'

@Component({
  selector: 'app-home-container',
  standalone: true,
<<<<<<< HEAD
  imports: [DesignContainerComponent,SigninComponent, FavoritesContainerComponent, AuthChoiceComponent],
=======
  

>>>>>>> 858f6b5bf424e3ebc9225895a37a4c3cd995795c
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})

export class HomeContainerComponent {
logoPath: string = '/assets/svg/logo-no-background.svg'
}