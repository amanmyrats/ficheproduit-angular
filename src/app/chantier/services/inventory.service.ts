import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { InventoryItem } from '../models/inventory-item.model';
import { Inventory } from '../models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getInventories(): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(`${env.apiUrl}/chantier/inventories`);
  }

  getInventory(id: string): Observable<Inventory> {
    return this.httpClient.get<Inventory>(`${env.apiUrl}/chantier/inventories/${id}`);
  }

  createInventory(inventory: Inventory): Observable<Inventory> {
    return this.httpClient.post<Inventory>(`${env.apiUrl}/chantier/inventories`, inventory);
  }

  updateInventory(id: string, inventory: Inventory): Observable<Inventory> {
    return this.httpClient.put<Inventory>(`${env.apiUrl}/chantier/inventories/${id}`, inventory);
  }

  deleteInventory(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/chantier/inventories/${id}`);
  }

  // Inventory Items
  getInventoryItems(inventoryId: string): Observable<InventoryItem[]> {
    return this.httpClient.get<InventoryItem[]>(`${env.apiUrl}/chantier/inventories/${inventoryId}/inventoryitems`);
  }

  createInventoryItem(inventoryId: string, inventoryItem: InventoryItem): Observable<InventoryItem> {
    return this.httpClient.post<InventoryItem>(`${env.apiUrl}/chantier/inventories/${inventoryId}/inventoryitems`, inventoryItem);
  }

  updateInventoryItem(inventoryId: string, id:string, inventoryItem: InventoryItem): Observable<InventoryItem> {
    return this.httpClient.put<InventoryItem>(`${env.apiUrl}/chantier/inventories/${inventoryId}/inventoryitems/${id}`, inventoryItem);
  }

  deleteInventoryItem(inventoryId: string, id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/chantier/inventories/${inventoryId}/inventoryitems/${id}`);
  }

}
