import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Inventoryitemannexe5 } from '../models/inventoryitemannexe5.model';

@Injectable({
  providedIn: 'root'
})
export class Inventoryitemannexe5Service {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getInventoryItemAnnexe5(id: string): Observable<Inventoryitemannexe5> {
    return this.httpClient.get<Inventoryitemannexe5>(`${env.apiUrl}/chantier/inventoryitemannexe5s/${id}`);
  }

  createInventoryItemAnnexe5(inventoryItemAnnexe5: Inventoryitemannexe5): Observable<Inventoryitemannexe5> {
    return this.httpClient.post<Inventoryitemannexe5>(`${env.apiUrl}/chantier/inventoryitemannexe5s`, inventoryItemAnnexe5);
  }

  updateInventoryItemAnnexe5(id: string, inventoryItemAnnexe5: Inventoryitemannexe5): Observable<Inventoryitemannexe5> {
    return this.httpClient.put<Inventoryitemannexe5>(`${env.apiUrl}/chantier/inventoryitemannexe5s/${id}`, inventoryItemAnnexe5);
  }

  deleteInventoryItemAnnexe5(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/chantier/inventoryitemannexe5s/${id}`);
  }

}
