import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/chantier/models/room.model';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';
import { environment as env } from 'src/environments/environment';
import { Project } from '../models/project.model';
import { Materialcard } from 'src/app/chantier/models/materialcard.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${env.apiUrl}/bytk/projects`);
  }

  getProjectRooms(id: string): Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${env.apiUrl}/bytk/projects/${id}/rooms`);
  }

  getProjectAnnexe5s(id: string): Observable<Annexe5[]> {
    return this.httpClient.get<Annexe5[]>(`${env.apiUrl}/bytk/projects/${id}/annexe5s`);
  }

  getProjectMaterialCards(id: string): Observable<Materialcard[]> {
    return this.httpClient.get<Materialcard[]>(`${env.apiUrl}/bytk/projects/${id}/materialcards`);
  }

  getProjectsHasAnnexe5(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${env.apiUrl}/bytk/projects/hasannexe5`);
  }
}
