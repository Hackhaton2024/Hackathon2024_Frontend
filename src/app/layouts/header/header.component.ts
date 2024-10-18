import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { Router } from '@angular/router';
import { BtnComponent } from '../../shared/components/btn/btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent,BtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToSearch() {
    this.router.navigate(['/search']); 
  }

  goToFavorites() {
    this.router.navigate(['/favoris']); 
  }
}
