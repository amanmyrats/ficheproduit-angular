import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${env.apiUrl}/bytk/countries`);
  }
}
