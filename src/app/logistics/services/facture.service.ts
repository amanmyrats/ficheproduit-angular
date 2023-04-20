import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../models/facture.model';
import { Factureitem } from '../models/factureitem.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  
  constructor(
    private httpClient: HttpClient, 
  ) { }

  getFactures(): Observable<Facture[]> {
    return this.httpClient.get<Facture[]>(`${env.apiUrl}/logistics/factures`);
  }

  getFacture(id: string): Observable<Facture> {
    return this.httpClient.get<Facture>(`${env.apiUrl}/logistics/factures/${id}`);
  }

  getFactureFactureItems(id: string): Observable<Factureitem[]> {
    return this.httpClient.get<Factureitem[]>(`${env.apiUrl}/logistics/factures/${id}/factureitems`);
  }
}
