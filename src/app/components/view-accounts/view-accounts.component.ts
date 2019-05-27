import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Account } from 'src/app/contracts/account';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent implements OnInit {

  accounts: Account[];

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getAccounts().subscribe(
      response => this.accounts = response)
  }

}
