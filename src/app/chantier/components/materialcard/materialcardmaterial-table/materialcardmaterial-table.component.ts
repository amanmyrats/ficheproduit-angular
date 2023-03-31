import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Materialcard } from 'src/app/chantier/models/materialcard.model';
import { Materialcardmaterial } from 'src/app/chantier/models/materialcardmaterial.model';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { MaterialcardmaterialService } from 'src/app/chantier/services/materialcardmaterial.service';
import { MaterialcardmaterialFormComponent } from '../materialcardmaterial-form/materialcardmaterial-form.component';

@Component({
  selector: 'app-materialcardmaterial-table',
  templateUrl: './materialcardmaterial-table.component.html',
  styleUrls: ['./materialcardmaterial-table.component.scss']
})
export class MaterialcardmaterialTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() projectIdFromParent: any = '';
  @Input() materialcardFromParent: Materialcard;
  @Input() materialcardIdFromParent: number | undefined;


  materialcardMaterials!: MatTableDataSource<Materialcardmaterial>;
  columnsToDisplay = ['id', 'material', 'quantity', 'unit', 'unitPrice', 'actions', 'materialcardmaterialannexe5s'];
  materialcardId: string;

  constructor(
    private materialcardService: MaterialcardService,
    private materialcardmaterialService: MaterialcardmaterialService, 
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.materialcardId = this.materialcardIdFromParent as unknown as string;
    this.getMaterialcardMaterials(this.materialcardId);
  }

  getMaterialcardMaterials(materialcardId: string): void {
    this.materialcardService.getMaterialcardMaterialsByMaterialcard(materialcardId)
      .subscribe((data: Materialcardmaterial[]) => {
        this.materialcardMaterials = new MatTableDataSource(data);
        this.materialcardMaterials.sort = this.sort;
        this.materialcardMaterials.paginator = this.paginator;
      });
  }

  deleteMaterialcardMaterial(materialcardMaterialId: string) {
    this.materialcardmaterialService.deleteMaterialCardMaterial(materialcardMaterialId)
      .subscribe({
        next: (data: string) => {
          console.log("deleted");
          this.getMaterialcardMaterials(this.materialcardId);
        },
        error: (err: any) => {
          console.log("error when deleting");
          console.log(err);
        }
      });
  }

  openCreateMaterialcardMaterialFormDialog() {
    const dialogRef = this.dialog.open(MaterialcardmaterialFormComponent, {
      data: {
        materialcardMaterialIdFromTable: null,
        materialcardMaterialFromTable: null,
        materialcardFromTable: this.materialcardFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getMaterialcardMaterials(this.materialcardId);
        }
      }
    });
  }

  openUpdateMaterialcardMaterial(
    materialcardMaterialId: string,
    materialcardMaterialFromTable: Materialcardmaterial,
    ) {
      materialcardMaterialFromTable.materialcard=this.materialcardFromParent;
    const dialogRef = this.dialog.open(MaterialcardmaterialFormComponent, {
      data: {
        materialcardMaterialIdFromTable: materialcardMaterialId,
        materialcardMaterialFromTable: materialcardMaterialFromTable,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getMaterialcardMaterials(this.materialcardId);
        }
      }
    });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.materialcardMaterials.filter = filterValue.trim().toLowerCase();

  //   if (this.materialcardMaterials.paginator) {
  //     this.materialcardMaterials.paginator.firstPage();
  //   }
  // }

}
