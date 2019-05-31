import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { User } from 'src/app/contracts/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user: User;
  id: number;
  newAccount: boolean = false;

  constructor(private route: ActivatedRoute,private rest: RestService) {
    route.params.subscribe(
      params => this.id = params['id'])
   }

  ngOnInit() {
    this.rest.getUserById(this.id).subscribe(
      response => this.user = response)
        
      }

}
