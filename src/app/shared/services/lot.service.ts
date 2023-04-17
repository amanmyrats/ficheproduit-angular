import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Lot } from '../models/lot.model';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getLots(): Observable<Lot[]> {
    return this.httpClient.get<Lot[]>(`${env.apiUrl}/bytk/lots`);
  }
}
