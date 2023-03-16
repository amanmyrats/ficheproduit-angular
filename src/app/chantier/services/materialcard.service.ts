import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Materialcard } from '../models/materialcard.model';
import { Materialcardmaterial } from '../models/materialcardmaterial.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialcardService {
  materialcard_api_url: string = `${env.apiUrl}/chantier/materialcards`;
  constructor(
    private httpClient: HttpClient,
  ) { }

  getMaterialcards(): Observable<Materialcard[]> {
    console.log("inside materialcard service")
    return this.httpClient.get<Materialcard[]>(`${this.materialcard_api_url}`);
  }

  getMaterialcard(id: string): Observable<Materialcard> {
    return this.httpClient.get<Materialcard>(`${this.materialcard_api_url}/${id}`);
  }

  createMaterialcard(materialcard: Materialcard): Observable<Materialcard>{
    return this.httpClient.post<Materialcard>(`${this.materialcard_api_url}`, materialcard);
  }

  deleteMaterialcard(id: string): Observable<string>{
    return this.httpClient.delete<string>(`${this.materialcard_api_url}/${id}`);
  }

  updateMaterialcard(id: string, materialcard: Materialcard): Observable<Materialcard> {
    return this.httpClient.put<Materialcard>(`${this.materialcard_api_url}/${id}`, materialcard);
  }
  
  getMaterialcardMaterials(materialCardId: string): Observable<Materialcardmaterial[]>{
    return this.httpClient.get<Materialcardmaterial[]>(`${this.materialcard_api_url}/${materialCardId}/materialcardmaterials`);
  }

}
