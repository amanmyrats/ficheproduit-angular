import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Annexe5 } from '../../models/annexe5.model';
import { ProjectService } from 'src/app/shared/services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-annexe5-detail',
  templateUrl: './annexe5-detail.component.html',
  styleUrls: ['./annexe5-detail.component.scss']
})
export class Annexe5DetailComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  annexe5s!: MatTableDataSource<Annexe5>;
  annexe5sArray: Annexe5[];
  columnsToDisplay = [
    'id', 'code', 'nameEn', 'quantity', 'unit',
    // 'materialUnitPrice', 'materialTotalPrice',
    // 'fabricationUnitPrice', 'fabricationTotalPrice',
    // 'transportUnitPrice', 'transportTotalPrice',
    'unitPrice', 'totalPrice'
  ];
  projectId: string;

  constructor(
    private projectService: ProjectService, 
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    this.getProjectAnnexe5s(this.projectId);
  }

  getProjectAnnexe5s(projectId: string): void {
    this.projectService.getProjectAnnexe5s(projectId)
      .subscribe((data: Annexe5[]) => {
        console.log("annexe5s fetched successfully")
        this.annexe5sArray = data;
        this.annexe5s = new MatTableDataSource(this.annexe5sArray);
        this.annexe5s.sort = this.sort;
        this.annexe5s.paginator = this.paginator;
      });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.annexe5s.filter = filterValue.trim().toLowerCase();

  //   if (this.annexe5s.paginator) {
  //     this.annexe5s.paginator.firstPage();
  //   }
  // }

}
