import { Component, OnInit } from '@angular/core';
import { UsersService } from '@services/users.service';
import { DataSourceUser } from './data-source';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit   {

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor(private userService: UsersService) {
    
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.dataSource.init(users);
    });
  }

}
