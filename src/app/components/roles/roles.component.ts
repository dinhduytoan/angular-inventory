import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {

  list: any;
  constructor(private roleService: RoleService) {}
  ngOnInit(): void {
    
  }

  getAll() {
    const result = this.roleService.paginate().subscribe(res => {
      if(res.success === 1) this.list = res.data;
    })
  }
}
