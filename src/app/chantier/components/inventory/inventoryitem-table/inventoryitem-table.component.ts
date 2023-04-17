import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inventory } from 'src/app/chantier/models/inventory.model';
import { Inventoryitem } from 'src/app/chantier/models/inventoryitem.model';
import { InventoryService } from 'src/app/chantier/services/inventory.service';
import { InventoryitemService } from 'src/app/chantier/services/inventoryitem.service';
import { InventoryitemFormComponent } from '../inventoryitem-form/inventoryitem-form.component';

@Component({
  selector: 'app-inventoryitem-table',
  templateUrl: './inventoryitem-table.component.html',
  styleUrls: ['./inventoryitem-table.component.scss']
})
export class InventoryitemTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  inventoryItems!: MatTableDataSource<Inventoryitem>;
  columnsToDisplay = ['materialcard', 'annexe5s', 'factures', 'quantity', 'unit', 'image', 'unitPrice', 'totalPrice', 'actions'];
  inventoryId: string;
  currentInventoryItem: Inventoryitem;

  @Input() projectIdFromParent: any = '';
  @Input() inventoryFromParent: Inventory;

  constructor(
    private inventoryService: InventoryService,
    private inventoryItemService: InventoryitemService,
    private dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.inventoryId = this.inventoryFromParent.id as unknown as string;
    this.getInventoryRoomInventoryItems();
    
  }

  getInventoryRoomInventoryItems(): void {
    this.inventoryService.getInventoryRoomInventoryItems(this.inventoryId)
      .subscribe((data: Inventoryitem[]) => {
        this.inventoryItems = new MatTableDataSource(data);
        this.inventoryItems.sort = this.sort;
        this.inventoryItems.paginator = this.paginator;

        console.log("materialcard");
    console.log(data[0].materialcard)
      });
  }

  deleteInventoryItem(inventoryItemId: string) {
    this.inventoryItemService.deleteInventoryItem(inventoryItemId)
      .subscribe({
        next: (data: string) => {
          console.log("deleted");
          this.getInventoryRoomInventoryItems();
        },
        error: (err: any) => {
          console.log("error when deleting");
          console.log(err);
        }
      });
  }

  openCreateInventoryItemFormDialog() {
    const dialogRef = this.dialog.open(InventoryitemFormComponent, {
      data: {
        inventoryItemDataFromTable: null,
        room: this.inventoryFromParent,
        projectId: this.projectIdFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getInventoryRoomInventoryItems();
        }
      }
    });
  }

  openUpdateInventoryItemFormDialog(
    inventoryItemId: string,
    inventoryItemDataFromTable: Inventoryitem,
  ) {
    inventoryItemDataFromTable.materialcard = this.inventoryFromParent;
    const dialogRef = this.dialog.open(InventoryitemFormComponent, {
      data: {
        inventoryItemDataFromTable: inventoryItemDataFromTable,
        room: this.inventoryFromParent,
        projectId: this.projectIdFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getInventoryRoomInventoryItems();
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
