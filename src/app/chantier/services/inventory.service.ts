import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Inventory } from '../models/inventory.model';
import { Inventoryitem } from '../models/inventoryitem.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getInventoryRooms(): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(`${env.apiUrl}/chantier/inventories`);
  }

  getInventoryRoom(roomId: string): Observable<Inventory> {
    return this.httpClient.get<Inventory>(`${env.apiUrl}/chantier/inventories/${roomId}`);
  }

  // create is not necessary, must be done in room level
  // delete is not necessary, must be done in inventoryItem level

  getInventoryRoomInventoryItems(id: string): Observable<Inventoryitem[]> {
    return this.httpClient.get<Inventoryitem[]>(`${env.apiUrl}/chantier/inventories/${id}/inventoryitems`);

  }
}
