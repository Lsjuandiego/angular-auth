import { Component, OnInit } from '@angular/core';
import { UsersService } from '@services/users.service';
import { DataSourceUser } from './data-source';
import { AuthService } from '@services/auth.service';
import { User } from '@models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent implements OnInit {
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];
  user: User | null = null;

  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getUsers();
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe((users) => {
      this.dataSource.init(users);
    });
  }
}
