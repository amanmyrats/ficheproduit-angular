import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderitem } from '../models/orderitem.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderitemService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getOrderItem(id: string): Observable<Orderitem> {
    return this.httpClient.get<Orderitem>(`${env.apiUrl}/achat/orderitems/${id}`);
  }

  createOrderItem(orderItem: Orderitem): Observable<Orderitem> {
    return this.httpClient.post<Orderitem>(`${env.apiUrl}/achat/orderitems`, orderItem);
  }

  updateOrderItem(id: string, orderItem: Orderitem): Observable<Orderitem> {
    return this.httpClient.put<Orderitem>(`${env.apiUrl}/achat/orderitems/${id}`, orderItem);
  }

  deleteOrderItem(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/achat/orderitems/${id}`);
  }

  // Materialcards
  addOrderItemMaterialCard(id: string, orderItem: Orderitem): Observable<Orderitem> {
    return this.httpClient.patch(`${env.apiUrl}/achat/orderitems/${id}/addmaterialcard`, orderItem);
  }

  deleteOrderItemMaterialCard(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/achat/orderitems/${id}/deletematerialcard`);
  }

  // MaterialcardMaterials
  addOrderItemMaterialCardMaterial(id: string, orderItem: Orderitem): Observable<Orderitem> {
    return this.httpClient.patch(`${env.apiUrl}/achat/orderitems/${id}/addmaterialcardmaterial`, orderItem);
  }

  deleteOrderItemMaterialCardMaterial(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/achat/orderitems/${id}/deletematerialcardmaterial`);
  }
}
