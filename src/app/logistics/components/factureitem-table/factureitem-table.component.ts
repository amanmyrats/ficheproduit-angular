import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Facture } from '../../models/facture.model';
import { Factureitem } from '../../models/factureitem.model';
import { MatTableDataSource } from '@angular/material/table';
import { FactureService } from '../../services/facture.service';
import { FactureitemService } from '../../services/factureitem.service';
import { MatDialog } from '@angular/material/dialog';
import { FactureitemorderitemFormComponent } from '../factureitemorderitem-form/factureitemorderitem-form.component';

@Component({
  selector: 'app-factureitem-table',
  templateUrl: './factureitem-table.component.html',
  styleUrls: ['./factureitem-table.component.scss']
})
export class FactureitemTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() projectIdFromParent: any = '';
  @Input() factureFromParent: Facture;
  @Input() factureIdFromParent: string;


  factureItems!: MatTableDataSource<Factureitem>;
  factureItemsArray: Factureitem[];
  columnsToDisplay = ['id', 'order', 'orderitem', 'descEn', 'quantity', 'unit', 'unitPrice', 'totalPrice', 'factureitemannexe5s'];
  factureId: string;

  constructor(
    private factureService: FactureService,
    private factureitemService: FactureitemService, 
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.factureId = this.factureIdFromParent;
    this.getFactureItems(this.factureId);
  }

  getFactureItems(factureId: string): void {
    this.factureService.getFactureFactureItems(factureId)
      .subscribe((factureItems: Factureitem[]) => {
        console.log("factureItems fetched successfully")
        this.factureItemsArray = factureItems;
        this.factureItems = new MatTableDataSource(this.factureItemsArray);
        // this.factureItems.sort = this.sort;
        // this.factureItems.paginator = this.paginator;
      });
  }

  openAddFactureItemOrderItemFormDialog(
    factureItemId: string, factureItem: Factureitem, 
    orderId: string
  ) {
    const dialogRef = this.dialog.open(FactureitemorderitemFormComponent, {
      data: {
        factureItemIdFromTable: factureItemId,
        factureItemFromTable: factureItem,
        orderIdFromTable: orderId, 
        projectIdFromTable: this.projectIdFromParent, 
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (updatedFactureItem) => {
        // console.log("here is afterClosed");
        // console.log(updatedFactureItem);
        if (updatedFactureItem) {
          console.log("new materialcard added to orderitem");
          console.log(updatedFactureItem);
          this.updateFactureItemsArrayAfterAdd(updatedFactureItem);
        }
      }
    });
  }

  deleteFactureItemOrderItem(
    factureItemId: string,
  ) {
    this.factureitemService.deleteFactureItemOrderItem(factureItemId).subscribe((data: any) => {
      console.log("deleted orderitem from factureitem");
      this.updateFactureItemsArrayAfterDelete(factureItemId);
    });
  }


  updateFactureItemsArrayAfterAdd(factureItem: Factureitem): void {
    // Get the index of the item you want to remove
    const index = this.factureItemsArray.findIndex(facture => facture.id === factureItem.id);
    // Remove the item from the array
    if (index !== -1) {
      this.factureItemsArray.splice(index, 1);
      this.factureItemsArray.splice(index, 0, factureItem);
      this.factureItems = new MatTableDataSource(this.factureItemsArray);
    }  
  }

  updateFactureItemsArrayAfterDelete(factureItemId: string): void {
    // Get the index of the item you want to remove
    const index = this.factureItemsArray.findIndex(order => order.id === factureItemId);
    // Remove the item from the array
    if (index !== -1) {
      this.factureItemsArray[index].orderitem = {"id":''};
      this.factureItems = new MatTableDataSource(this.factureItemsArray);
    }  
  }

}
