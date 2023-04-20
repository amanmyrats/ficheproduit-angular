import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Order } from '../../models/order.model';
import { MatTableDataSource } from '@angular/material/table';
import { Orderitem } from '../../models/orderitem.model';
import { OrderService } from '../../services/order.service';
import { OrderitemService } from '../../services/orderitem.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderitemmaterialcardFormComponent } from '../orderitemmaterialcard-form/orderitemmaterialcard-form.component';
import { OrderitemmaterialcardmaterialFormComponent } from '../orderitemmaterialcardmaterial-form/orderitemmaterialcardmaterial-form.component';

@Component({
  selector: 'app-orderitem-table',
  templateUrl: './orderitem-table.component.html',
  styleUrls: ['./orderitem-table.component.scss']
})
export class OrderitemTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() projectIdFromParent: any = '';
  @Input() orderFromParent: Order;
  @Input() OrderIdFromParent: string;


  orderItems!: MatTableDataSource<Orderitem>;
  orderItemsArray: Orderitem[];
  columnsToDisplay = ['id', 'materialcard', 'materialcardmaterial', 'descEn', 'quantity', 'unit', 'unitPrice', 'totalPrice'];
  orderId: string;

  constructor(
    private orderService: OrderService,
    private orderItemService: OrderitemService, 
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.orderId = this.OrderIdFromParent;
    this.getOrderItems(this.orderId);
  }

  getOrderItems(orderId: string): void {
    this.orderService.getOrderOrderItems(orderId)
      .subscribe((orderItems: Orderitem[]) => {
        console.log("orderItems fetched successfully")
        this.orderItemsArray = orderItems;
        this.orderItems = new MatTableDataSource(this.orderItemsArray);
        // this.orderItems.sort = this.sort;
        // this.orderItems.paginator = this.paginator;
      });
  }

  openAddOrderItemMaterialCardFormDialog(
    orderItemId: string, orderItem: Orderitem, 
    // buttonDeleteMaterialCard: MatIconButton
  ) {
    const dialogRef = this.dialog.open(OrderitemmaterialcardFormComponent, {
      data: {
        orderItemIdFromTable: orderItemId,
        orderItemFromTable: orderItem,
        projectIdFromTable: this.projectIdFromParent, 
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (updatedOrderItem) => {
        // console.log("here is afterClosed");
        // console.log(updatedOrderItem);
        if (updatedOrderItem) {
          console.log("new materialcard added to orderitem");
          console.log(updatedOrderItem);
          this.updateOrderItemsArrayAfterAdd(updatedOrderItem);
        }
      }
    });
  }

  deleteOrderItemMaterialCard(
    orderItemId: string,
  ) {
    this.orderItemService.deleteOrderItemMaterialCard(orderItemId).subscribe((data: any) => {
      console.log("deleted materialcard from orderitem");
      this.updateOrderItemsArrayAfterDelete(orderItemId, true);
    });
  }

  openAddOrderItemMaterialCardMaterialFormDialog(
    orderItemId: string, orderItem: Orderitem, materialCardId: string
    // buttonDeleteMaterialCard: MatIconButton
  ) {
    const dialogRef = this.dialog.open(OrderitemmaterialcardmaterialFormComponent, {
      data: {
        orderItemIdFromTable: orderItemId,
        orderItemFromTable: orderItem,
        materialCardIdFromTable: materialCardId, 
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (updatedOrderItem) => {
        // console.log("here is afterClosed");
        // console.log(updatedOrderItem);
        if (updatedOrderItem) {
          console.log("new materialcardmaterial added to orderitem");
          console.log(updatedOrderItem);
          this.updateOrderItemsArrayAfterAdd(updatedOrderItem);
        }
      }
    });
  }

  deleteOrderItemMaterialCardMaterial(
    orderItemId: string,
  ) {
    this.orderItemService.deleteOrderItemMaterialCardMaterial(orderItemId).subscribe((data: any) => {
      console.log("deleted materialcardmaterial from orderitem");
      this.updateOrderItemsArrayAfterDelete(orderItemId, false);
    });
  }


  updateOrderItemsArrayAfterAdd(orderItem: Orderitem): void {
    // Get the index of the item you want to remove
    const index = this.orderItemsArray.findIndex(order => order.id === orderItem.id);
    // Remove the item from the array
    if (index !== -1) {
      this.orderItemsArray.splice(index, 1);
      this.orderItemsArray.splice(index, 0, orderItem);
      this.orderItems = new MatTableDataSource(this.orderItemsArray);
    }  
  }

  updateOrderItemsArrayAfterDelete(orderItemId: string, isMaterialCard: boolean): void {
    // Get the index of the item you want to remove
    const index = this.orderItemsArray.findIndex(order => order.id === orderItemId);
    // Remove the item from the array
    if (index !== -1) {
      if (isMaterialCard) {
        this.orderItemsArray[index].materialcard = {"id":0};
      } else {
        this.orderItemsArray[index].materialcardmaterial = {"id":0};
      }
      this.orderItems = new MatTableDataSource(this.orderItemsArray);
    }  
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.orderItems.filter = filterValue.trim().toLowerCase();

  //   if (this.orderItems.paginator) {
  //     this.orderItems.paginator.firstPage();
  //   }
  // }

}
