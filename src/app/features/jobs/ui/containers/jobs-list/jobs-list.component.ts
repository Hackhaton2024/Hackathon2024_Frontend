import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../../services/jobs.service';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent {
  codeRome!: string;
  jobs$ = this.jobsService.getJobsByCodeRome(this.codeRome);

  constructor(private activatedRoute: ActivatedRoute, private jobsService : JobsService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.codeRome = params['codeRome'];
    });

  }
}
