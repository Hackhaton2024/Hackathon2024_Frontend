import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BtnComponent } from "../../../../shared/components/btn/btn.component";

@Component({
  selector: 'app-favorites-container',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './favorites-container.component.html',
  styleUrl: './favorites-container.component.scss'
})

  export class FavoritesContainerComponent {
    @Output() favoriteClicked = new EventEmitter<void>();
  
    onFavoriteClick() {
      this.favoriteClicked.emit();
    }
  }

