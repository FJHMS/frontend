import { Component } from '@angular/core';
import { User } from './contracts/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banking-frontend';

  isAuthenticated: boolean = false;

  login(isAuthenticated: boolean){
    this.isAuthenticated = isAuthenticated;
  }
  

}