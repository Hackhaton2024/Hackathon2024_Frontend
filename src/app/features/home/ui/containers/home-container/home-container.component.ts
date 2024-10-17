import { Component } from '@angular/core';
import { DesignContainerComponent } from "../../../../design/ui/containers/design-container/design-container.component";
import {LoginComponent} from '../../../../../features/design/ui/containers/loginContainer/login.component';
import { SearchJobComponent } from '../../../../search/ui/containers/search-job/search-job.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [DesignContainerComponent, LoginComponent, SearchJobComponent],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent {

}
