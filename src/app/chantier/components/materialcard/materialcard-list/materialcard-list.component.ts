import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materialcard } from 'src/app/chantier/models/materialcard.model';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';

@Component({
  selector: 'app-materialcard-list',
  templateUrl: './materialcard-list.component.html',
  styleUrls: ['./materialcard-list.component.scss']
})
export class MaterialcardListComponent implements OnInit {
  materialcards: Materialcard [];

  constructor (
    private materialcardService: MaterialcardService,
  ){}

  ngOnInit(): void {
      this.getMaterials();
  }

  getMaterials(): void {
    this.materialcardService.getMaterialcards()
      .subscribe((materialcardlist: Materialcard[]) => {
        this.materialcards = materialcardlist;
      })
  }

  deleteMaterial(id: any): void {
    this.materialcardService.deleteMaterialcard(id)
      .subscribe((response: any) => {
        this.getMaterials();
      })
  }
}
