import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Material } from 'src/app/chantier/models/material.model';
import { MaterialService } from 'src/app/chantier/services/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {
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
