import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: Order;
  orderId: string;

  constructor (
    private orderService: OrderService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['id'];
    this.getOrder(this.orderId);
  }

  getOrder(id: string) {
    this.orderService.getOrder(id)
      .subscribe((order: Order) => {
        this.order = order;
        console.log("Retreived Order");
        console.log(order);
      })
  }
}
