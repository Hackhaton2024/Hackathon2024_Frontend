import { Component, Input } from '@angular/core';
import { JobsCodeInterface } from '../../../models/job-code.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent {
  @Input() jobs!: JobsCodeInterface[];

}
