import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../../models/material-class.model';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  
  materials: Material[] | null = null;
  
  constructor(private materialService: MaterialService){}
  
  ngOnInit(): void {
      this.getMaterials();
  }

  getMaterials(): void{
    console.log("inside material component ts");
    this.materialService.getMaterials().subscribe((data: any) => {
      this.materials = data;
      console.log("data " + data)
    });
    console.log(this.materials);
  }
}
