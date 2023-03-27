import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { InventoryItem } from '../models/inventory-item.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryitemService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getInventoryItem(id: string): Observable<InventoryItem> {
    return this.httpClient.get<InventoryItem>(`${env.apiUrl}/chantier/inventoryitems/${id}`);
  }

  updateInventoryItem(id: string, inventoryItem: InventoryItem): Observable<InventoryItem> {
    return this.httpClient.put<InventoryItem>(`${env.apiUrl}/inventoryitems/${id}`, inventoryItem);
  }

  deleteInventoryItem(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/chantier/inventoryitems/${id}`);
  }

}
