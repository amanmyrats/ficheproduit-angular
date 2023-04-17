import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Materialcard } from 'src/app/chantier/models/materialcard.model';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { Project } from 'src/app/shared/models/project.model';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-materialcard-create',
  templateUrl: './materialcard-create.component.html',
  styleUrls: ['./materialcard-create.component.scss']
})
export class MaterialcardCreateComponent implements OnInit {
  createMaterialCardForm: FormGroup;
  projectForm: FormGroup;
  projects: Project[];

  constructor (
    private fb: FormBuilder,
    private materialCardService: MaterialcardService,
    private projectService: ProjectService,
    private router: Router, 
    private location: Location,
  ) {
    
    this.createMaterialCardForm = this.fb.group({
      project: ""
    });

    this.projectForm = this.fb.group({
      id: ""
    });
  }

  ngOnInit(): void {
      this.getProjects();
  }

  onSubmit(): void {
    this.createMaterialCardForm.controls['project'].setValue(this.projectForm.value);
    if (this.createMaterialCardForm.valid) {
      this.materialCardService.createMaterialcard(this.createMaterialCardForm.value)
      .subscribe({
        next: (materialcard: Materialcard) => {
          console.log("MaterialCard was created successfully");
          console.log(materialcard);
          this.router.navigate(["/chantier/materialcards/edit/" + materialcard.id]);
        }
      });
    } else {
      console.log(this.createMaterialCardForm.errors)
    }
    console.log(this.createMaterialCardForm.value);
    console.log(this.projectForm.value);
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe({
      next: (projects: Project[]) => {
        // console.log("Successfully fetched projects.");
        // console.log(projects);
        this.projects = projects;
      },
      error: (err: any) => {
        // console.log("Error happened when fetching projects.");
        console.log(err);
      }
    });
  }

  onCancel(): void {
    this.location.back();
  }

}
