import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/common';
import { API_URL } from '.';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  accessToken: string = '';
  headers: any;

  constructor(private http: HttpClient) { 
    this.accessToken = localStorage.getItem('access_token') ?? '';
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`
    });
  }
  
  list(page: number = 1, limit: number = 10) : Observable<IResponse> {
    return this.http.get<IResponse>(`${API_URL}users?page=${page}&limit=${limit}`, { 
      headers: this.headers
    });
  }

  create() {

  }

}
