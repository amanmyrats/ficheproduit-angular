import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Unit } from '../models/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUnits(): Observable<Unit> {
    return this.httpClient.get<Unit>(`${env.apiUrl}/bytk/units`);
  }
}
