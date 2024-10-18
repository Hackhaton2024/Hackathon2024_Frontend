import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { BtnComponent } from '../../../../../shared/components/btn/btn.component';
import { JobsCodeInterface } from '../../../models/job-code.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from '../../components/jobs-list/jobs-list.component';
import { FavoritesContainerComponent } from '../../../../favorites/ui/favorites-component/favorites-container.component';

@Component({
  selector: 'app-search-job',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, CommonModule, JobsListComponent],
  templateUrl: './search-job.component.html',
  styleUrl: './search-job.component.scss',
})
export class SearchJobComponent {
  searchResult!: JobsCodeInterface[];
  searchForm = new FormGroup({
    searchTerm: new FormControl('', Validators.required),
  });
  searchExecuted = false;
  isLoading$ = this.searchService.isLoading$;

  constructor(private searchService: SearchService) {}

  searchJob() {
    const searchTerm = this.searchForm.get('searchTerm')?.value;

    if (!searchTerm) {
      return;
    }
    this.searchService.SearchJobsCode(searchTerm).subscribe((data) => {
      this.searchResult = data;
    });
    this.searchExecuted = true;
    console.log(this.searchResult);
    
  }
}
