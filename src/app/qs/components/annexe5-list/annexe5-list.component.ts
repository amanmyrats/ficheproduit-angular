import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-annexe5-list',
  templateUrl: './annexe5-list.component.html',
  styleUrls: ['./annexe5-list.component.scss']
})
export class Annexe5ListComponent implements OnInit {
  projectsHasAnnexe5: Project [];

  constructor (
    private projectService: ProjectService,
  ){}

  ngOnInit(): void {
      this.getProjectsHasAnnexe5();
  }

  getProjectsHasAnnexe5(): void {
    this.projectService.getProjectsHasAnnexe5()
      .subscribe((projectsHasAnnexe5: Project[]) => {
        this.projectsHasAnnexe5 = projectsHasAnnexe5;
      })
  }

}
