import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Material } from '../models/material.model';
import { environment as env } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materialApiUrl: string = `${env.apiUrl}/chantier/materials`;

  constructor(
    private httpClient: HttpClient, 
    private fb: FormBuilder) { }
  
  getMaterials(): Observable<Material[]>{
    return this.httpClient.get<Material[]>(`${this.materialApiUrl}`);
  }

  getMaterial(id: string): Observable<Material>{
    return this.httpClient.get<Material>(`${this.materialApiUrl}/${id}`);
  }

  createMaterial(material: Material): Observable<Material>{
    return this.httpClient.post<Material>(`${this.materialApiUrl}`, material);
  }

  updateMaterial(id: string, material: Material): Observable<Material> {
    return this.httpClient.put<Material>(`${this.materialApiUrl}/${id}`, material);
  }

  deleteMaterial(id: any): Observable<string> {
    return this.httpClient.delete<string>(`${this.materialApiUrl}/${id}`);
  }

  createMaterialFormGroup(material?: Material): FormGroup {
    return this.fb.group({
      image : null,
      nameEn : [''], 
      nameFr : [''], 
      nameRu : [''], 
      nameTm : [''], 
      descEn : [''], 
      descFr : [''], 
      descRu : [''], 
      descTm : [''],
    });
  }
}
