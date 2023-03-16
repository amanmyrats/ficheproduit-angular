import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materialcardmaterial } from 'src/app/chantier/models/materialcardmaterial.model';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';

@Component({
  selector: 'app-materialcardmaterial-table',
  templateUrl: './materialcardmaterial-table.component.html',
  styleUrls: ['./materialcardmaterial-table.component.scss']
})
export class MaterialcardmaterialTableComponent implements OnInit {
  materialcardmaterialList: Materialcardmaterial[];
  columnsToDisplay = ['id', 'material', 'quantity', 'unit', 'unitPrice'];
  materialcardId: string;

  constructor (
    private materialcardService: MaterialcardService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
      this.materialcardId = this.route.snapshot.params['id'];
      this.materialcardService.getMaterialcardMaterials(this.materialcardId)
        .subscribe((data: Materialcardmaterial[] ) => {
          this.materialcardmaterialList = data;
        });
  }
}
