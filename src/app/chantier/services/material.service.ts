import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Material } from '../models/material-class.model';
import { environment as env } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  constructor(
    private httpClient: HttpClient, 
    private fb: FormBuilder) { }
  
  getMaterials(): Observable<Material[]>{
    return this.httpClient.get<Material[]>(`${env.apiUrl}/chantier/materials`);
  }

  getMaterial(id: string): Observable<Material>{
    return this.httpClient.get<Material>(`${env.apiUrl}/chantier/materials/${id}`);
  }

  createMaterial(material: Material): Observable<Material>{
    return this.httpClient.post<Material>(`${env.apiUrl}/chantier/materials`, material);
  }

  updateMaterial(id: string, material: Material): Observable<Material> {
    return this.httpClient.put<Material>(`${env.apiUrl}/chantier/materials/${id}`, material);
  }

  deleteMaterial(id: any): Observable<string> {
    return this.httpClient.delete<string>(`${env.apiUrl}/chantier/materials/${id}`);
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
