import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IResponse } from '../interfaces/common';
import { API_URL } from '.';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwtService: JwtHelperService, private router: Router) { }
  login(data: any) {
    const result = this.http.post<IResponse>(`${API_URL}authenticate/login`, data);
    return result;
  }
  isAuthenticated() : boolean {
    const token = localStorage.getItem('access_token');
    if(typeof token !== "undefined" && token !== null) {
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

  logout()
  {
    localStorage.removeItem('access_token');
    // this.router.navigate['/login'];
  }
}
