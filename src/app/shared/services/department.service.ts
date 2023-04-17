import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private httpClient: HttpClient, 
  ) { }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${env.apiUrl}/bytk/departments`);
  }
}
