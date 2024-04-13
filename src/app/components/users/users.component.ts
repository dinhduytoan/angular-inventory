import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  userTitle: string = '';
  listUser: any;
  paging: any;
  constructor(private userService: UserService, private title: Title) {}
  
  ngOnInit(): void {
    this.title.setTitle("User management");
    this.userTitle = "User Management";

    this.paginate();
  }
  paginate() {
    this.userService.list(1, 10).subscribe(res => {
      console.log(res);
      if(res.success === 1) {
        this.listUser = res.data;
      }
    })
  }
}
