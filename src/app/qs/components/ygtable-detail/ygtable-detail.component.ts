import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
import { Annexe5 } from '../../models/annexe5.model';
// import { ProjectService } from 'src/app/shared/services/project.service';
import { ActivatedRoute } from '@angular/router';
// import { Factureitemannexe5Service } from 'src/app/logistics/services/factureitemannexe5.service';
import { Factureitemannexe5 } from 'src/app/logistics/models/factureitemannexe5.model';
import { Annexe5Service } from '../../services/annexe5.service';
import { YgtableService } from '../../services/ygtable.service';

@Component({
  selector: 'app-ygtable-detail',
  templateUrl: './ygtable-detail.component.html',
  styleUrls: ['./ygtable-detail.component.scss'], 
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class YgtableDetailComponent implements OnInit {

  annexe5s!: Annexe5[];
  columnsToDisplay = [
    'id', 'code', 'nameEn', 'quantity', 'unit',
    // 'materialUnitPrice', 'materialTotalPrice',
    // 'fabricationUnitPrice', 'fabricationTotalPrice',
    // 'transportUnitPrice', 'transportTotalPrice',
    'unitPrice', 'totalPrice'
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Factureitemannexe5 | null;
  projectId: string;

  constructor(
    // private projectService: ProjectService, 
    private ygtableService: YgtableService, 
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    this.getYgTableByProjectId(this.projectId);
  }

  // getProjectAnnexe5s(id: string): void {
  //   this.projectService.getProjectAnnexe5s(this.projectId)
  //   .subscribe((annexe5s: Annexe5[]) => {
  //     console.log("Annexe5 list was received");
  //     console.log(annexe5s);
  //     this.annexe5s = annexe5s;
  //   });

    getYgTableByProjectId(id: string): void {
      this.ygtableService.getYgTableByProjectId(id)
      .subscribe((annexe5s: Annexe5[]) => {
        console.log("YG Table by project id were fetched successfully.");
        console.log(annexe5s);
        this.annexe5s = annexe5s;
      });
    }

  }