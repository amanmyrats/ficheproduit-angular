import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materialcardmaterial } from '../models/materialcardmaterial.model';
import { environment as env } from 'src/environments/environment';
import { Materialcardmaterialannexe5 } from '../models/materialcardmaterialannexe5.model';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialcardmaterialService {
  constructor(
    private httpClient: HttpClient
  ) { }
  
  getMaterialCardMaterial(id: string): Observable<Materialcardmaterial> {
    return this.httpClient.get<Materialcardmaterial>(`${env.apiUrl}/chantier/materialcardmaterials/${id}`);
  }

  createMaterialCardMaterial(materialCardMaterial: Materialcardmaterial): Observable<Materialcardmaterial> {
    return this.httpClient.post<Materialcardmaterial>(`${env.apiUrl}/chantier/materialcardmaterials`, materialCardMaterial);
  }

  updateMaterialCardMaterial(id: string, materialCardMaterial: Materialcardmaterial): Observable<Materialcardmaterial> {
    return this.httpClient.put<Materialcardmaterial>(`${env.apiUrl}/chantier/materialcardmaterials/${id}`, materialCardMaterial);
  }

  deleteMaterialCardMaterial(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/chantier/materialcardmaterials/${id}`);
  }

  // MaterialCardMaterial Annexe5s
  getMaterialCardMaterialAnnexe5sByMaterialCardMaterial(materialCardMaterialId: string): Observable<Materialcardmaterialannexe5[]> {
    return this.httpClient.get<Materialcardmaterialannexe5[]>(`${env.apiUrl}/chantier/materialcardmaterials/${materialCardMaterialId}/materialcardmaterialannexe5s`);
  }

  // Annexe5s
  getAnnexe5sByMaterialCardMaterial(materialCardMaterialId: string): Observable<Annexe5[]> {
    return this.httpClient.get<Annexe5[]>(`${env.apiUrl}/chantier/materialcardmaterials/${materialCardMaterialId}/annexe5s`);
  }
}
