import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Material } from '../../models/material-class.model';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {
  title: string;
  materialId: string;
  tempMaterial: Material;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private materialService: MaterialService,
  ) {}

  ngOnInit(): void {
    this.title = "Create Material";
    this.materialId = this.route.snapshot.params['id'];
  }

  updateMaterial(materialFormGroup: any): void {
    this.materialService
      .updateMaterial(this.materialId, materialFormGroup)
      .subscribe((material: Material) => {
        this.cancel();
      });
  }

  cancel(){
    this.router.navigate(["/chantier/materials"]);
 }
}
