import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/contracts/user';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  
  id: number;

  constructor(private route: ActivatedRoute,private rest: RestService) {
    route.params.subscribe(
      params => this.id = params['id'])
   }

  ngOnInit() {
    this.rest.deleteUserById(this.id)
      }
}
