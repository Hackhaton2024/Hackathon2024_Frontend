import { Component } from '@angular/core';
import { DesignContainerComponent } from "../../../../design/ui/containers/design-container/design-container.component";
import {LoginComponent} from '../../../../../features/design/ui/containers/loginContainer/login.component';
import { FavoritesContainerComponent } from '../../../../design/ui/containers/favorites-container/favorites-container.component';
import {AuthChoiceComponent} from '../../../../../features/design/ui/containers/sign-container/sign-container.component'

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [DesignContainerComponent,LoginComponent, FavoritesContainerComponent, AuthChoiceComponent],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent {

}