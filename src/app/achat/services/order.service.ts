import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment as env } from 'src/environments/environment';
import { Orderitem } from '../models/orderitem.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${env.apiUrl}/achat/orders`);
  }

  getOrder(id: string): Observable<Order> {
    return this.httpClient.get<Order>(`${env.apiUrl}/achat/orders/${id}`);
  }

  getOrderOrderItems(id: string): Observable<Orderitem[]> {
    return this.httpClient.get<Orderitem[]>(`${env.apiUrl}/achat/orders/${id}/orderitems`);
  }
}
