import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Inventoryitem } from '../models/inventoryitem.model';
import { Materialcard } from '../models/materialcard.model';
import { Materialcardmaterial } from '../models/materialcardmaterial.model';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';

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
    return this.httpClient.get<Materialcard>(`${this.materialcard_api_url}/${id}`
    // ,{ headers: new HttpHeaders({'Accept':'application/json;charset=UTF-8'})}
    );
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
  
  // MaterialcardMaterials
  getMaterialcardMaterialsByMaterialcard(materialCardId: string): Observable<Materialcardmaterial[]>{
    return this.httpClient.get<Materialcardmaterial[]>(`${this.materialcard_api_url}/${materialCardId}/materialcardmaterials`);
  }

  createMaterialcardMaterial(materialcardId: string, materialcardMaterial: Materialcardmaterial): Observable<Materialcardmaterial> {
    return this.httpClient.post<Materialcardmaterial>(`${this.materialcard_api_url}/${materialcardId}/materialcardmaterials`, materialcardMaterial);
  }

  updateMaterialcardMaterial(materialcardId: string, materialcardMaterialId: string, materialcardMaterial: Materialcardmaterial): Observable<Materialcardmaterial> {
    return this.httpClient.put<Materialcardmaterial>(`${this.materialcard_api_url}/${materialcardId}/materialcardmaterials/${materialcardMaterialId}`, materialcardMaterial);
  }

  deleteMaterialcardMaterial(materialcardId: string, materialcardMaterialId: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.materialcard_api_url}/${materialcardId}/materialcardmaterials/${materialcardMaterialId}`);
  }

  // InventoryItems
  getInventoryItemsByMaterialcard(materialcardId: string): Observable<Inventoryitem[]> {
    return this.httpClient.get<Inventoryitem[]>(`${this.materialcard_api_url}/${materialcardId}/inventoryitems`
    // , { headers: new HttpHeaders({'Accept': 'application/json; charset=utf-8'})}
    );
  }

  createInventoryItemByMaterialcard(materialcardId: string, roomId: string, projectId: string, inventoryItem: Inventoryitem): Observable<Inventoryitem> {
    return this.httpClient.post<Inventoryitem>(`${this.materialcard_api_url}/${materialcardId}/inventoryitems?room_id=${roomId}&project_id=${projectId}`, inventoryItem);
  }

  updateInventoryItemByMaterialcard(materialcardId: string, projectId: string, roomId: string, id: string, inventoryItem: Inventoryitem): Observable<Inventoryitem> {
    return this.httpClient.put<Inventoryitem>(`${this.materialcard_api_url}/${materialcardId}/inventoryitems/${id}?room_id=${roomId}&project_id=${projectId}`, inventoryItem);
  }

  // Annexe5s
  getAnnexe5sByMaterialCard(materialcardId: string): Observable<Annexe5[]> {
    return this.httpClient.get<Annexe5[]>(`${this.materialcard_api_url}/${materialcardId}/annexe5s`);
  }

}
