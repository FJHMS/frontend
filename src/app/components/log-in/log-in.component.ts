import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/contracts/user';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  tryUsername: string;
  tryPassword: string;
  users: User[];
  isAuthenticated: boolean = false;
  message: string;
  @Output()
  authEventemitter = new EventEmitter<boolean>();

  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  login(){
    this.rest.getUsers().subscribe(
      response => {
        this.users = response;
        for (let user of this.users){
          if(user.username == this.tryUsername && user.password == this.tryPassword){
            this.isAuthenticated = true;
            this.message = "Login successful";
            this.authEventemitter.emit(this.isAuthenticated);
            break;
          }else{
            this.message = "No User with these values registered";
          }
        }
      })
  }
}
