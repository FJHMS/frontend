import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { User } from 'src/app/contracts/user';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: User[];

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getUsers().subscribe(
      response => this.users = response)
  }

}
