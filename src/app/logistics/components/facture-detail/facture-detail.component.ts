import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/facture.model';
import { FactureService } from '../../services/facture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture-detail',
  templateUrl: './facture-detail.component.html',
  styleUrls: ['./facture-detail.component.scss']
})
export class FactureDetailComponent implements OnInit {
  facture: Facture;
  factureId: string;

  constructor (
    private factureService: FactureService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.factureId = this.route.snapshot.params['id'];
    this.getFacture(this.factureId);
  }

  getFacture(id: string) {
    this.factureService.getFacture(id)
      .subscribe((facture: Facture) => {
        this.facture = facture;
        console.log("Retreived Facture");
        console.log(facture);
      })
  }
}
