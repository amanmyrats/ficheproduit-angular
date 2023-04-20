import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factureitemannexe5 } from '../models/factureitemannexe5.model';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Factureitemannexe5Service {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getFactureItemAnnexe5(id: string): Observable<Factureitemannexe5> {
    return this.httpClient.get<Factureitemannexe5>(`${env.apiUrl}/logistics/factureitemannexe5s/${id}`);
  }

  createFactureItemAnnexe5(factureItemAnnexe5: Factureitemannexe5): Observable<Factureitemannexe5> {
    return this.httpClient.post<Factureitemannexe5>(`${env.apiUrl}/logistics/factureitemannexe5s`, factureItemAnnexe5);
  }

  updateFactureItemAnnexe5(id: string, factureItemAnnexe5: Factureitemannexe5): Observable<Factureitemannexe5> {
    return this.httpClient.put<Factureitemannexe5>(`${env.apiUrl}/logistics/factureitemannexe5s/${id}`, factureItemAnnexe5);
  }

  deleteFactureItemAnnexe5(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/logistics/factureitemannexe5s/${id}`);
  }

}
