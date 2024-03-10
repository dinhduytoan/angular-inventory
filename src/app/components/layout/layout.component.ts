import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../interfaces/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})

export class LayoutComponent implements OnInit {

  asideMenu: IMenu[] = [
    {
      icon: null,
      url: '/dashboard',
      name: 'Dashboard'
    },
    {
      icon: '',
      url: '/users',
      name: 'Users'
    }
  ];
  activeUrl: boolean = false;
  currentMenu: string = '';
  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // console.log(this.router.url);
    if (this.router.url === '/') {
      this.router.navigate(['dashboard']);
    } else {
      const url = this.router.url.split('/');
      this.currentMenu = url[1];
    }
    // this.router.navigate(['dashboard']);
  } 

}
