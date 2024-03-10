import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup | any;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private title: Title,
    private jwtService: JwtHelperService,
    private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.title.setTitle("Login Inventory");
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6)])
    });
    const token = localStorage.getItem('access_token');
    if(!this.jwtService.isTokenExpired(token)) this.router.navigate(['dashboard']);
  }
  login(formData: FormGroup)
  {
    this.authService.login(formData).subscribe(res => {
      if(res.data.token) {
        localStorage.setItem('access_token', res.data.token);
        this.router.navigate(['dashboard']);
      } else {
        formData.reset();
      }
    })
  }
}
