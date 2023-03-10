import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Material } from '../../models/material-class.model';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  private routeSub: Subscription;
  material: Material;

  constructor ( private activatedRoute: ActivatedRoute, 
    private materialService: MaterialService,
    private router: Router){}

  ngOnInit(){
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      console.log("param id " + params['id']);
      this.getMaterial(params['id']);
    });
  }

  getMaterial(id:string): void {
    console.log("inside this.getMaterial");
    this.materialService.getMaterial(id).subscribe((data: Material) => {
      console.log("material from spring boot " + data);
      this.material = data;
    });
  }

  deleteMaterial(id:any): void {
    this.materialService.deleteMaterial(id).subscribe((data: any) => {

      this.router.navigate(["/chantier/materials"]);
      console.log("done redirecting");
    })
  }

  ngOnDestroy (){
    this.routeSub.unsubscribe()
  }
}
