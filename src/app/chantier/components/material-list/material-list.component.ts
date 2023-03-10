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
  
  materials: Material[];
  
  constructor(private materialService: MaterialService){}
  
  ngOnInit(): void {
      this.getMaterials();
  }

  getMaterials(): void{
    this.materialService.getMaterials().subscribe((data: Material[]) => {
      this.materials = data;
    });
  }

  deleteMaterial(id: any): void {
    this.materialService.deleteMaterial(id).subscribe(
      (data: any) => {
        console.log("data from delete " + data)
        this.getMaterials();
      }
    );
  }
}
