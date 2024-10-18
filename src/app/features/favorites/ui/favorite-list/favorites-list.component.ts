import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service'; // Importez votre service
import { JobsCodeInterface } from '../../../search/models/job-code.model'; // Assurez-vous que le chemin est correct
import { BtnComponent } from "../../../../shared/components/btn/btn.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-favorites-list',
  standalone:true,
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss'],
  imports: [ BtnComponent,RouterLink, CommonModule],
})
export class FavoritesListComponent implements OnInit {
  favorites!: JobsCodeInterface[];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {    
    this.favoritesService.getFavorites().subscribe((data) => {
      this.favorites = data;
    });
  }
}
