import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materialcardmaterialannexe5 } from '../models/materialcardmaterialannexe5.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Materialcardmaterialannexe5Service {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getMaterialCardMaterialAnnexe5(id: string): Observable<Materialcardmaterialannexe5> {
    return this.httpClient.get<Materialcardmaterialannexe5>(`${env.apiUrl}/chantier/materialcardmaterialannexe5s/${id}`);
  }

  createMaterialCardMaterialAnnexe5(materialCardMaterialAnnexe5: Materialcardmaterialannexe5): Observable<Materialcardmaterialannexe5> {
    return this.httpClient.post<Materialcardmaterialannexe5>(`${env.apiUrl}/chantier/materialcardmaterialannexe5s`, materialCardMaterialAnnexe5);
  }

  updateMaterialCardMaterialAnnexe5(id: string, materialCardMaterialAnnexe5: Materialcardmaterialannexe5): Observable<Materialcardmaterialannexe5> {
    return this.httpClient.put<Materialcardmaterialannexe5>(`${env.apiUrl}/chantier/materialcardmaterialannexe5s/${id}`, materialCardMaterialAnnexe5);
  }

  deleteMaterialCardMaterialAnnexe5(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/chantier/materialcardmaterialannexe5s/${id}`);
  }

}