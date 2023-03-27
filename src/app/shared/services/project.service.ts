import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
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
}
