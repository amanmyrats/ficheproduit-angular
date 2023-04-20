import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/facture.model';
import { FactureService } from '../../services/facture.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.scss']
})
export class FactureListComponent implements OnInit {
  factures: Facture [];

  constructor (
    private factureService: FactureService,
  ){}

  ngOnInit(): void {
      this.getFactures();
  }

  getFactures(): void {
    this.factureService.getFactures()
      .subscribe((factures: Facture[]) => {
        this.factures = factures;
      })
  }

}
