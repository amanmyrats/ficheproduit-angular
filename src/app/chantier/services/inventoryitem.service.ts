import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Inventoryitem } from '../models/inventoryitem.model';
import { Inventoryitemannexe5 } from '../models/inventoryitemannexe5.model';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryitemService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getInventoryItem(id: string): Observable<Inventoryitem> {
    return this.httpClient.get<Inventoryitem>(`${env.apiUrl}/chantier/inventoryitems/${id}`);
  }

  createInventoryItem(inventoryItem: Inventoryitem): Observable<Inventoryitem> {
    return this.httpClient.post<Inventoryitem>(`${env.apiUrl}/chantier/inventoryitems`, inventoryItem);
  }

  updateInventoryItem(id: string, inventoryItem: Inventoryitem): Observable<Inventoryitem> {
    return this.httpClient.put<Inventoryitem>(`${env.apiUrl}/chantier/inventoryitems/${id}`, inventoryItem);
  }

  deleteInventoryItem(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/chantier/inventoryitems/${id}`);
  }

  // Inventory Item Annexe5s
  getInventoryItemAnnexe5sByInventoryItem(inventoryItemId: string): Observable<Inventoryitemannexe5[]> {
    return this.httpClient.get<Inventoryitemannexe5[]>(`${env.apiUrl}/chantier/inventoryitems/${inventoryItemId}/inventoryitemannexe5s`);
  }

  // Annexe5s
  getAnnexe5sByInventoryItem(inventoryItemId: string): Observable<Annexe5[]> {
    return this.httpClient.get<Annexe5[]>(`${env.apiUrl}/chantier/inventoryitems/${inventoryItemId}/annexe5s`);
  }
}
