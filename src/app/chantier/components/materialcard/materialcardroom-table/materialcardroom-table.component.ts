import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inventoryitem } from 'src/app/chantier/models/inventoryitem.model';
import { Materialcard } from 'src/app/chantier/models/materialcard.model';
import { InventoryitemService } from 'src/app/chantier/services/inventoryitem.service';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { MaterialcardroomFormComponent } from '../materialcardroom-form/materialcardroom-form.component';

@Component({
  selector: 'app-materialcardroom-table',
  templateUrl: './materialcardroom-table.component.html',
  styleUrls: ['./materialcardroom-table.component.scss']
})
export class MaterialcardroomTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  inventoryItems!: MatTableDataSource<Inventoryitem>;
  columnsToDisplay = ['id', 'room', 'quantity', 'unit', 'actions', 'inventoryitemannexe5s'];
  materialcardId: string;
  currentInventoryItem: Inventoryitem;

  @Input() projectIdFromParent: any = '';
  @Input() materialcardFromParent: Materialcard;

  constructor(
    private materialcardService: MaterialcardService,
    private inventoryItemService: InventoryitemService,
    private dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.materialcardId = this.materialcardFromParent.id as unknown as string;
    this.getInventoryItemsByMaterialcard();
  }

  getInventoryItemsByMaterialcard(): void {
    this.materialcardService.getInventoryItemsByMaterialcard(this.materialcardId)
      .subscribe((data: Inventoryitem[]) => {
        this.inventoryItems = new MatTableDataSource(data);
        this.inventoryItems.sort = this.sort;
        this.inventoryItems.paginator = this.paginator;
      });
  }

  deleteInventoryItem(inventoryItemId: string) {
    this.inventoryItemService.deleteInventoryItem(inventoryItemId)
      .subscribe({
        next: (data: string) => {
          console.log("deleted");
          this.getInventoryItemsByMaterialcard();
        },
        error: (err: any) => {
          console.log("error when deleting");
          console.log(err);
        }
      });
  }

  openCreateMaterialcardroomFormDialog() {
    const dialogRef = this.dialog.open(MaterialcardroomFormComponent, {
      data: {
        inventoryItemDataFromTable: null,
        materialcard: this.materialcardFromParent,
        projectId: this.projectIdFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getInventoryItemsByMaterialcard();
        }
      }
    });
  }

  openUpdateMaterialcardRoomFormDialog(
    inventoryItemId: string,
    inventoryItemDataFromTable: Inventoryitem,
  ) {
    inventoryItemDataFromTable.materialcard = this.materialcardFromParent;
    const dialogRef = this.dialog.open(MaterialcardroomFormComponent, {
      data: {
        inventoryItemDataFromTable: inventoryItemDataFromTable,
        materialcard: this.materialcardFromParent,
        projectId: this.projectIdFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getInventoryItemsByMaterialcard();
        }
      }
    });

  }


  getCurrentInventoryItem(inventoryItem: Inventoryitem): Inventoryitem {
    return inventoryItem;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.inventoryItems.filter = filterValue.trim().toLowerCase();

  //   if (this.inventoryItems.paginator) {
  //     this.inventoryItems.paginator.firstPage();
  //   }
  // }
}
