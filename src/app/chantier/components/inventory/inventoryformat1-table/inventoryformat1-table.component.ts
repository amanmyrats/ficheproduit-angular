import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Inventory } from 'src/app/chantier/models/inventory.model';
import { Inventoryitem } from 'src/app/chantier/models/inventoryitem.model';
import { InventoryService } from 'src/app/chantier/services/inventory.service';
import { InventoryitemService } from 'src/app/chantier/services/inventoryitem.service';

@Component({
  selector: 'app-inventoryformat1-table',
  templateUrl: './inventoryformat1-table.component.html',
  styleUrls: ['./inventoryformat1-table.component.scss']
})
export class Inventoryformat1TableComponent implements OnInit {

  inventoryItemsForTotal!: Inventoryitem[];
  inventoryItems!: MatTableDataSource<Inventoryitem>;
  columnsToDisplay: string[] = ['materialcard', 'annexe5s', 'factures', 'quantity', 'unit', 'image', 'unitPrice', 'totalPrice'];
  inventoryId: string;
  currentInventoryItem: Inventoryitem;
  inventoryTotal: any = 0;

  @Input() projectIdFromParent: any = '';
  @Input() inventoryFromParent: Inventory;

  constructor(
    private inventoryService: InventoryService,
    private inventoryItemService: InventoryitemService,
  ) {

  }

  ngOnInit(): void {
    this.inventoryId = this.inventoryFromParent.id as unknown as string;
    this.getInventoryRoomInventoryItems();
    
  }

  getInventoryRoomInventoryItems(): void {
    this.inventoryService.getInventoryRoomInventoryItems(this.inventoryId)
      .subscribe((inventoryItems: Inventoryitem[]) => {
        this.inventoryItemsForTotal = inventoryItems;
        this.inventoryItems = new MatTableDataSource(inventoryItems);
        console.log("materialcard");
        console.log(inventoryItems[0].materialcard);

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

  // openCreateInventoryItemFormDialog() {
  //   const dialogRef = this.dialog.open(InventoryitemFormComponent, {
  //     data: {
  //       inventoryItemDataFromTable: null,
  //       room: this.inventoryFromParent,
  //       projectId: this.projectIdFromParent,
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       // console.log("here is afterClosed");
  //       if (val) {
  //         this.getInventoryRoomInventoryItems();
  //       }
  //     }
  //   });
  // }

  // openUpdateInventoryItemFormDialog(
  //   inventoryItemId: string,
  //   inventoryItemDataFromTable: Inventoryitem,
  // ) {
  //   inventoryItemDataFromTable.materialcard = this.inventoryFromParent;
  //   const dialogRef = this.dialog.open(InventoryitemFormComponent, {
  //     data: {
  //       inventoryItemDataFromTable: inventoryItemDataFromTable,
  //       room: this.inventoryFromParent,
  //       projectId: this.projectIdFromParent,
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       // console.log("here is afterClosed");
  //       if (val) {
  //         this.getInventoryRoomInventoryItems();
  //       }
  //     }
  //   });

  // }

  getCurrentInventoryItem(inventoryItem: Inventoryitem): Inventoryitem {
    return inventoryItem;
  }

  getTotal() {
    return 1111; // this.inventoryItemsForTotal.map(t => t.totalPrice).reduce((acc, value) => this.inventoryTotal + value, 0);
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.inventoryItems.filter = filterValue.trim().toLowerCase();

  //   if (this.inventoryItems.paginator) {
  //     this.inventoryItems.paginator.firstPage();
  //   }
  // }
}