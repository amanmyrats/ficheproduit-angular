import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { InventoryItem } from 'src/app/chantier/models/inventory-item.model';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';

@Component({
  selector: 'app-materialcardroom-table',
  templateUrl: './materialcardroom-table.component.html',
  styleUrls: ['./materialcardroom-table.component.scss']
})
export class MaterialcardroomTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  inventoryItems!: MatTableDataSource<InventoryItem>;
  columnsToDisplay = ['id', 'room', 'quantity', 'unit', 'actions'];
  materialcardId: string;

  constructor(
    private materialcardService: MaterialcardService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.materialcardId = this.route.snapshot.params['id'];
    this.getInventoryItemsByMaterialcard();
  }

  getInventoryItemsByMaterialcard(): void {
    this.materialcardService.getInventoryItemsByMaterialcard(this.materialcardId)
      .subscribe((data: InventoryItem[]) => {
        this.inventoryItems = new MatTableDataSource(data);
        this.inventoryItems.sort = this.sort;
        this.inventoryItems.paginator = this.paginator;
      });
  }

  // deleteMaterialcardMaterial(materialcardMaterialId: string) {
  //   // console.log("deleting materialcardRoom");
  //   // console.log(materialcardMaterialId);
  //   this.materialcardService.deleteMaterialcardMaterial(this.materialcardId, materialcardMaterialId)
  //     .subscribe({
  //       next: (data: string) => {
  //         console.log("deleted");
  //         this.getInventoryItemsByMaterialcard();
  //       },
  //       error: (err: any) => {
  //         console.log("error when deleting");
  //         console.log(err);
  //       }
  //     });
  // }

  // openCreateMaterialcardMaterialFormDialog() {
  //   const dialogRef = this.dialog.open(MaterialcardMaterialFormComponent, {
  //     data: {
  //       materialcardMaterialFormData: null,
  //       materialcardId: this.materialcardId,
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       // console.log("here is afterClosed");
  //       if (val) {
  //         this.getInventoryItemsByMaterialcard();
  //       }
  //     }
  //   });
  // }

  // openUpdateMaterialcardMaterial(
  //   materialcardMaterialId: string,
  //   materialcardMaterialFormData: MaterialcardRoom,) {
  //   const dialogRef = this.dialog.open(MaterialcardMaterialFormComponent, {
  //     data: {
  //       materialcardMaterialFormData: materialcardMaterialFormData,
  //       materialcardId: this.materialcardId,
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       // console.log("here is afterClosed");
  //       if (val) {
  //         this.getInventoryItemsByMaterialcard();
  //       }
  //     }
  //   });
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.inventoryItems.filter = filterValue.trim().toLowerCase();

  //   if (this.inventoryItems.paginator) {
  //     this.inventoryItems.paginator.firstPage();
  //   }
  // }
}
