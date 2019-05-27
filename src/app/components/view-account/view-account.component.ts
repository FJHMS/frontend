import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Account } from 'src/app/contracts/account';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  account: Account;
  id: number;

  constructor(private route: ActivatedRoute,private rest: RestService) {
    route.params.subscribe(
      params => this.id = params['id'])
   }

  ngOnInit() {
    this.rest.getAccountById(this.id).subscribe(
      response => this.account = response)
        
      }
}
