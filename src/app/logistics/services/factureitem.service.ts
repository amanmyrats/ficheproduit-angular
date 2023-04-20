import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factureitem } from '../models/factureitem.model';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Factureitemannexe5 } from '../models/factureitemannexe5.model';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';

@Injectable({
  providedIn: 'root'
})
export class FactureitemService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getFactureItem(id: string): Observable<Factureitem> {
    return this.httpClient.get<Factureitem>(`${env.apiUrl}/logistics/factureitems/${id}`);
  }

  createFactureItem(factureItem: Factureitem): Observable<Factureitem> {
    return this.httpClient.post<Factureitem>(`${env.apiUrl}/logistics/factureitems`, factureItem);
  }

  updateFactureItem(id: string, factureItem: Factureitem): Observable<Factureitem> {
    return this.httpClient.put<Factureitem>(`${env.apiUrl}/logistics/factureitems/${id}`, factureItem);
  }

  deleteFactureItem(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/logistics/factureitems/${id}`);
  }

  // Orderitems
  addFactureItemOrderItem(id: string, factureItem: Factureitem): Observable<Factureitem> {
    return this.httpClient.patch(`${env.apiUrl}/logistics/factureitems/${id}/addorderitem`, factureItem);
  }

  deleteFactureItemOrderItem(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/logistics/factureitems/${id}/deleteorderitem`);
  }

  // Facture item annexe5
  getFactureItemFactureItemAnnexe5s(id: string): Observable<Factureitemannexe5[]> {
    return this.httpClient.get<Factureitemannexe5[]>(`${env.apiUrl}/logistics/factureitems/${id}/factureitemannexe5s`);
  }

  // Annexe5
  getFactureItemAllPossibleAnnexe5s(id: string): Observable<Annexe5[]> {
    // has to be changed later
    return this.httpClient.get<Annexe5[]>(`${env.apiUrl}/qs/annexe5s`);
  }
}
