import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materialcard } from 'src/app/chantier/models/materialcard.model';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';

@Component({
  selector: 'app-materialcard-detail',
  templateUrl: './materialcard-detail.component.html',
  styleUrls: ['./materialcard-detail.component.scss']
})
export class MaterialcardDetailComponent implements OnInit {
  materialcard: Materialcard;
  materialcardId: string;

  constructor (
    private materialcardService: MaterialcardService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.materialcardId = this.route.snapshot.params['id'];
    this.getMaterialcard(this.materialcardId);
  }

  getMaterialcard(id: string) {
    this.materialcardService.getMaterialcard(id)
      .subscribe((data: Materialcard) => {
        this.materialcard = data;
        console.log("Retreived MaterialCard");
        console.log(data);
      })
  }
}
