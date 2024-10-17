import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BtnComponent } from '../../../../../shared/components/btn/btn.component';

@Component({
  selector: 'app-jobs-filter',
  standalone: true,
  imports: [ReactiveFormsModule, BtnComponent],
  templateUrl: './jobs-filter.component.html',
  styleUrl: './jobs-filter.component.scss',
})
export class JobsFilterComponent {
  filterForm = new FormGroup({
    locality: new FormControl('', Validators.required),
    radius: new FormControl('', Validators.required),
  });

  filterJobs() {}
}
