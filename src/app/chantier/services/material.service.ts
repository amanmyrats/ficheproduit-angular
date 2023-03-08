import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Material } from '../models/material-class.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  baseMaterialUrl: string = 'http://localhost:8080/api/v1/chantier/materials'
  constructor(private httpClient: HttpClient) { }
  
  getMaterials(): Observable<Material[]>{
    return this.httpClient.get<Material[]>(this.baseMaterialUrl);
  }

}
