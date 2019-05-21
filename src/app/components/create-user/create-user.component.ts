import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { User } from 'src/app/contracts/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private rest: RestService) { }

  user: User;

  ngOnInit() {
  }

  addUser(firstname: string, lastname: string, username: string, password:string) {
    const user = new User(firstname,lastname,username,password);
    this.rest.postUser(user).subscribe(response => this.user = response);
  }



}
