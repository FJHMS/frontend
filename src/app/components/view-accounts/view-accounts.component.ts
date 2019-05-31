import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Account } from 'src/app/contracts/account';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/contracts/user';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent implements OnInit {

  user : User;
  id: number;
  accounts: any;

  constructor(private route: ActivatedRoute,private rest: RestService) {
    // route.params.subscribe(
    //   params => this.id = params['id'])
   }

  ngOnInit() {
    this.route.params.subscribe( params =>{
        this.id = params['id'];
        this.rest.getUserById(this.id).subscribe(
          response =>{
          this.user = response;
          this.accounts = this.user.accounts;
          });
        });
  }
}
