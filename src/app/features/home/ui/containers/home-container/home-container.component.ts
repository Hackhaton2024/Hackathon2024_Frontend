import { Component } from '@angular/core';
import { DesignContainerComponent } from "../../../../design/ui/containers/design-container/design-container.component";
import {LoginComponent} from '../../../../../features/design/ui/containers/loginContainer/login.component';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [DesignContainerComponent, LoginComponent],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent {

}
