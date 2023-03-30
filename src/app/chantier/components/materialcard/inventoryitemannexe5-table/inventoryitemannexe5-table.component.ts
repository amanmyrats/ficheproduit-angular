import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Inventoryitem } from 'src/app/chantier/models/inventoryitem.model';
import { Inventoryitemannexe5 } from 'src/app/chantier/models/inventoryitemannexe5.model';
import { InventoryitemService } from 'src/app/chantier/services/inventoryitem.service';
import { Inventoryitemannexe5Service } from 'src/app/chantier/services/inventoryitemannexe5.service';
import { Inventoryitemannexe5FormComponent } from '../inventoryitemannexe5-form/inventoryitemannexe5-form.component';

@Component({
  selector: 'app-inventoryitemannexe5-table',
  templateUrl: './inventoryitemannexe5-table.component.html',
  styleUrls: ['./inventoryitemannexe5-table.component.scss']
})
export class Inventoryitemannexe5TableComponent {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  inventoryItemAnnexe5s!: MatTableDataSource<Inventoryitemannexe5>;
  columnsToDisplay = ['id', 'annexe5', 'quantity', 'unit', 'actions'];
  inventoryItemId: string;
  @Input() projectIdFromParent: any = '';
  @Input() inventoryItemFromParent: Inventoryitem;

  constructor(
    private inventoryItemService: InventoryitemService,
    private inventoryItemAnnexe5Service: Inventoryitemannexe5Service,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.inventoryItemId = this.inventoryItemFromParent.id as unknown as string;
    this.getInventoryItemAnnexe5sByInventoryItem(this.inventoryItemId);
  }

  getInventoryItemAnnexe5sByInventoryItem(id: string): void {
    this.inventoryItemService.getInventoryItemAnnexe5sByInventoryItem(id)
      .subscribe((data: Inventoryitemannexe5[]) => {
        this.inventoryItemAnnexe5s = new MatTableDataSource(data);
        // this.inventoryItemAnnexe5s.sort = this.sort;
        // this.inventoryItemAnnexe5s.paginator = this.paginator;
      });
  }

  deleteInventoryItemAnnexe5(inventoryItemAnnexe5Id: string) {
    this.inventoryItemAnnexe5Service.deleteInventoryItemAnnexe5(inventoryItemAnnexe5Id)
      .subscribe({
        next: (data: string) => {
          console.log("deleted");
          this.getInventoryItemAnnexe5sByInventoryItem(this.inventoryItemId);
        },
        error: (err: any) => {
          console.log("error when deleting");
          console.log(err);
        }
      });
  }

  openCreateInventoryItemAnnexe5FormDialog() {
    console.log("inventory item from parent");
    console.log(this.inventoryItemFromParent);
    const dialogRef = this.dialog.open(Inventoryitemannexe5FormComponent, {
      data: {
        inventoryItemAnnexe5DataFromTable: null,
        inventoryItem: this.inventoryItemFromParent,
        projectId: this.projectIdFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getInventoryItemAnnexe5sByInventoryItem(this.inventoryItemId);
        }
      }
    });
  }

  openUpdateInventoryItemAnnexe5FormDialog(
    inventoryItemId: string,
    inventoryItemAnnexe5DataFromTable: Inventoryitemannexe5,
  ) {
    inventoryItemAnnexe5DataFromTable.inventoryItem = this.inventoryItemFromParent;
    const dialogRef = this.dialog.open(Inventoryitemannexe5FormComponent, {
      data: {
        inventoryItemAnnexe5DataFromTable: inventoryItemAnnexe5DataFromTable,
        inventoryItemId: inventoryItemId,
        inventoryItem: this.inventoryItemFromParent,
        projectId: this.projectIdFromParent,
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        // console.log("here is afterClosed");
        if (val) {
          this.getInventoryItemAnnexe5sByInventoryItem(this.inventoryItemId);
        }
      }
    });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.inventoryItemAnnexe5s.filter = filterValue.trim().toLowerCase();

  //   if (this.inventoryItemAnnexe5s.paginator) {
  //     this.inventoryItemAnnexe5s.paginator.firstPage();
  //   }
  // }

}
