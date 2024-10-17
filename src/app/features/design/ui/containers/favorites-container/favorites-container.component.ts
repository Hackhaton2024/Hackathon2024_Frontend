import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BtnComponent } from "../../../../../shared/components/btn/btn.component";

@Component({
  selector: 'app-favorites-container',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './favorites-container.component.html',
  styleUrl: './favorites-container.component.scss'
})
export class FavoritesContainerComponent {
  constructor(private router: Router) {}

 goToFavorites() {

    this.router.navigate(['/favoris']);
  

}

}