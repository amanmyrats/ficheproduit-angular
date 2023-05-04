import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annexe5 } from '../models/annexe5.model';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Annexe5Service {

  constructor(
    private httpClient: HttpClient, 
  ) { }
}
