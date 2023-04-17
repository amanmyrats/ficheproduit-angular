import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Phase } from '../models/phase.model';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getPhases(): Observable<Phase[]> {
    return this.httpClient.get<Phase[]>(`${env.apiUrl}/bytk/phases`);
  }
}
