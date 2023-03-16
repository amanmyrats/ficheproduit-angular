import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';

@Component({
  selector: 'app-materialcard-detail',
  templateUrl: './materialcard-detail.component.html',
  styleUrls: ['./materialcard-detail.component.scss']
})
export class MaterialcardDetailComponent implements OnInit {


  constructor (
    private materialcardService: MaterialcardService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {

  }
}
