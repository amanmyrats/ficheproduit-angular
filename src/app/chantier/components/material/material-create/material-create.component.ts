import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Material } from '../../../models/material-class.model';
import { MaterialService } from '../../../services/material.service';

@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.component.html',
  styleUrls: ['./material-create.component.scss']
})
export class MaterialCreateComponent implements OnInit {
  title: string;

  constructor (
    private fb: FormBuilder, 
    private materialService: MaterialService, 
    private router: Router,
    ){}

  ngOnInit(): void {   
    this.title = "Create Material";
  }

  createMaterial(materialFormData: any){
    // TODO: Use EventEmitter with form value
    console.warn("this is response from material create");
    console.warn(materialFormData);
    this.materialService.createMaterial(materialFormData)
      .subscribe((data: Material) => {
        this.router.navigate(["/chantier/materials"]);
    });
 }
 
 cancel(){
    this.router.navigate(["/chantier/materials"]);
 }

}
