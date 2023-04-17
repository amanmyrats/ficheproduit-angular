import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Trade } from '../models/trade.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getTrades(): Observable<Trade[]> {
    return this.httpClient.get<Trade[]>(`${env.apiUrl}/bytk/trades`);
  }
}
