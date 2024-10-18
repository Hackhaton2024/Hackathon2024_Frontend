import { Component, Input } from '@angular/core';
import { JobsCodeInterface } from '../../../models/job-code.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BtnComponent } from "../../../../../shared/components/btn/btn.component";
import { RouterLink } from '@angular/router';
import { AddFavoritesService } from '../../../services/addfavorites.service';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, BtnComponent,RouterLink],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent {

  @Input() jobs!: JobsCodeInterface[];
  displayedColumns: string[] = ['code', 'libelle', 'offre', 'favoris'];

  constructor(private addFavoritesService: AddFavoritesService) {}

 addToFavorites(job: any): void {
  this.addFavoritesService.addFavorite(job).subscribe(
    response => {
      console.log('Favori ajouté avec succès', response);
    },
    error => {
      console.error('Erreur lors de l\'ajout aux favoris', error);
    }
  );
}

}
