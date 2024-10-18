import { Component } from '@angular/core';
import { DesignContainerComponent } from "../../../../design/ui/containers/design-container/design-container.component";
import {SigninComponent} from '../../../../sign/ui/containers/signIn-container/signin-container.component'
import {FavoritesContainerComponent } from '../../../../favorites/ui/favorites-component/favorites-container.component';
import {AuthChoiceComponent} from '../../../../sign/ui/containers/sign-container/sign-container.component'

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [DesignContainerComponent,SigninComponent, FavoritesContainerComponent, AuthChoiceComponent],
  

  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})

export class HomeContainerComponent {
logoPath: string = '/assets/svg/logo-no-background.svg'
}