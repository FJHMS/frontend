import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Account } from 'src/app/contracts/account';
import { User } from 'src/app/contracts/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private rest: RestService) { }

  account: Account;
  user: User;
  // id: number;
  balance: number;

  ngOnInit() {
  }

  getUser(id: number){
    this.rest.getUserById(id).subscribe(
      response => {
        this.user = response;
        this.addAccount(this.balance,this.user)
      })
  }

  addAccount(balance: number, user: User) {
   const account = new Account(balance,user);
    this.rest.postAccount(account).subscribe(response => this.account = response);
  }


}
