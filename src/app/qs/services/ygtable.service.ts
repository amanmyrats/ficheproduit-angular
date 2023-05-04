import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annexe5 } from '../models/annexe5.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YgtableService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getYgTableByProjectId(id: string): Observable<Annexe5[]> {
    return this.httpClient.get<Annexe5[]>(`${env.apiUrl}/bytk/projects/${id}/annexe5s`);
  }
}
