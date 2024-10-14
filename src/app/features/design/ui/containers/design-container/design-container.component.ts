import { Component } from '@angular/core';
import { BtnComponent } from "../../../../../shared/components/btn/btn.component";

@Component({
  selector: 'app-design-container',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './design-container.component.html',
  styleUrl: './design-container.component.scss'
})
export class DesignContainerComponent {

  handleBtnClick() {
    console.log('Button clicked');
  }

}
