import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order [];

  constructor (
    private orderService: OrderService,
  ){}

  ngOnInit(): void {
      this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe((orders: Order[]) => {
        this.orders = orders;
      })
  }

}
