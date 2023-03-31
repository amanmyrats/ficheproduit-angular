import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Materialcardmaterial } from 'src/app/chantier/models/materialcardmaterial.model';
import { Materialcardmaterialannexe5 } from 'src/app/chantier/models/materialcardmaterialannexe5.model';
import { MaterialcardmaterialService } from 'src/app/chantier/services/materialcardmaterial.service';
import { Materialcardmaterialannexe5Service } from 'src/app/chantier/services/materialcardmaterialannexe5.service';
import { Materialcardmaterialannexe5FormComponent } from '../materialcardmaterialannexe5-form/materialcardmaterialannexe5-form.component';

@Component({
  selector: 'app-materialcardmaterialannexe5-table',
  templateUrl: './materialcardmaterialannexe5-table.component.html',
  styleUrls: ['./materialcardmaterialannexe5-table.component.scss']
})
export class Materialcardmaterialannexe5TableComponent {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  materialCardMaterialAnnexe5s!: MatTableDataSource<Materialcardmaterialannexe5>;
  columnsToDisplay = ['annexe5', 'quantity', 'unit', 'actions'];
  materialCardMaterialId: string;
  @Input() projectIdFromParent: any = '';
  @Input() materialCardMaterialFromParent: Materialcardmaterial;

  constructor(
    private materialCardMaterialService: MaterialcardmaterialService,
    private materialCardMaterialAnnexe5Service: Materialcardmaterialannexe5Service,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.materialCardMaterialId = this.materialCardMaterialFromParent.id as unknown as string;
    this.getMaterialCardMaterialAnnexe5sByMaterialCardMaterial(this.materialCardMaterialId);
  }

  getMaterialCardMaterialAnnexe5sByMaterialCardMaterial(id: string): void {
    this.materialCardMaterialService.getMaterialCardMaterialAnnexe5sByMaterialCardMaterial(id)
      .subscribe((data: Materialcardmaterialannexe5[]) => {
        this.materialCardMaterialAnnexe5s = new MatTableDataSource(data);
        // this.materialCardMaterialAnnexe5s.sort = this.sort;
        // this.materialCardMaterialAnnexe5s.paginator = this.paginator;
      });
  }

  deleteMaterialCardMaterialAnnexe5(materialCardMaterialAnnexe5Id: string) {
    this.materialCardMaterialAnnexe5Service.deleteMaterialCardMaterialAnnexe5(materialCardMaterialAnnexe5Id)
      .subscribe({
        next: (data: string) => {
          console.log("deleted");
          this.getMaterialCardMaterialAnnexe5sByMaterialCardMaterial(this.materialCardMaterialId);
        },
        error: (err: any) => {
          console.log("error when deleting");
          console.log(err);
        }
      });
  }

  openCreateMaterialCardMaterialAnnexe5FormDialog() {
    console.log("MaterialCardMaterial from parent");
    console.log(this.materialCardMaterialFromParent);
    const dialogRef = this.dialog.open(Materialcardmaterialannexe5FormComponent, {
      data: {
        projectIdFromTable: this.projectIdFromParent,
        materialCardMaterialAnnexe5FromTable: null,
        materialCardMaterialFromTable: this.materialCardMaterialFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getMaterialCardMaterialAnnexe5sByMaterialCardMaterial(this.materialCardMaterialId);
        }
      }
    });
  }

  openUpdateMaterialCardMaterialAnnexe5FormDialog(
    materialCardMaterialAnnexe5Id: string,
    materialCardMaterialAnnexe5: Materialcardmaterialannexe5,
  ) {
    materialCardMaterialAnnexe5.materialCardMaterial = this.materialCardMaterialFromParent;
    const dialogRef = this.dialog.open(Materialcardmaterialannexe5FormComponent, {
      data: {
        projectIdFromTable: this.projectIdFromParent,
        materialCardMaterialAnnexe5IdFromTable: materialCardMaterialAnnexe5Id,
        materialCardMaterialAnnexe5FromTable: materialCardMaterialAnnexe5,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getMaterialCardMaterialAnnexe5sByMaterialCardMaterial(this.materialCardMaterialId);
        }
      }
    });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.materialCardMaterialAnnexe5s.filter = filterValue.trim().toLowerCase();

  //   if (this.materialCardMaterialAnnexe5s.paginator) {
  //     this.materialCardMaterialAnnexe5s.paginator.firstPage();
  //   }
  // }

}