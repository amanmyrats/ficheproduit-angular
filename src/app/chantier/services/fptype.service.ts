import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Fptype } from '../models/fptype.model';

@Injectable({
  providedIn: 'root'
})
export class FptypeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFpTypes(): Observable<Fptype[]> {
    return this.httpClient.get<Fptype[]>(`${env.apiUrl}/chantier/fptypes`);
  }
}
