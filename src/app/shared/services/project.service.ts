import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/chantier/models/room.model';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getProjectRooms(id: string): Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${env.apiUrl}/bytk/projects/${id}/rooms`);
  }

  getProjectAnnexe5s(id: string): Observable<Annexe5[]> {
    return this.httpClient.get<Annexe5[]>(`${env.apiUrl}/bytk/projects/${id}/annexe5s`);
  }
}
