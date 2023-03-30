import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/app/chantier/models/material.model';
import { Materialcardmaterial } from 'src/app/chantier/models/materialcardmaterial.model';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { Unit } from 'src/app/shared/models/unit.model';
import { MaterialcardmaterialFormComponent } from '../materialcardmaterial-form/materialcardmaterial-form.component';

// const nestedProperty = (data: any, sortHeaderId: string): string | number => {
//   return sortHeaderId
//     .split(".")
//     .reduce((accumulator, key) => accumulator && accumulator[key], data) as
//     | string
//     | number;
// };

@Component({
  selector: 'app-materialcardmaterial-table',
  templateUrl: './materialcardmaterial-table.component.html',
  styleUrls: ['./materialcardmaterial-table.component.scss']
})
export class MaterialcardmaterialTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  materialcardMaterials!: MatTableDataSource<Materialcardmaterial>;
  columnsToDisplay = ['id', 'material', 'quantity', 'unit', 'unitPrice', 'actions'];
  materialcardId: string;

  constructor(
    private materialcardService: MaterialcardService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.materialcardId = this.route.snapshot.params['id'];
    this.getMaterialcardMaterials();
  }

  getMaterialcardMaterials(): void {
    this.materialcardService.getMaterialcardMaterials(this.materialcardId)
      .subscribe((data: Materialcardmaterial[]) => {
        this.materialcardMaterials = new MatTableDataSource(data);
        this.materialcardMaterials.sort = this.sort;
        this.materialcardMaterials.paginator = this.paginator;
      });
  }

  deleteMaterialcardMaterial(materialcardMaterialId: string) {
    // console.log("deleting materialcardMaterial");
    // console.log(materialcardMaterialId);
    this.materialcardService.deleteMaterialcardMaterial(this.materialcardId, materialcardMaterialId)
      .subscribe({
        next: (data: string) => {
          console.log("deleted");
          this.getMaterialcardMaterials();
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
        materialcardMaterialFormData: null,
        materialcardId: this.materialcardId,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getMaterialcardMaterials();
        }
      }
    });
  }

  openUpdateMaterialcardMaterial(
    materialcardMaterialId: string,
    materialcardMaterialFormData: Materialcardmaterial,) {
    const dialogRef = this.dialog.open(MaterialcardmaterialFormComponent, {
      data: {
        materialcardMaterialFormData: materialcardMaterialFormData,
        materialcardId: this.materialcardId,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getMaterialcardMaterials();
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
