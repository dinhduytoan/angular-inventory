import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '.';
import { IResponse } from '../interfaces/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  accessToken: string = '';
  headers: any;

  constructor(private http: HttpClient) { 
    this.accessToken = localStorage.getItem('access_token') ?? '';
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`
    });
  }

  paginate(page: number = 0, limit: number = 10) : Observable<IResponse> {
    return this.http.get<IResponse>(`${API_URL}roles?page=${page}&limit=${limit}`, { headers: this.headers });
  }
}
