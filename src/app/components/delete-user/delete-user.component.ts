import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/contracts/user';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  
  id: number;

  constructor(private route: ActivatedRoute,private rest: RestService,private location: Location) {
    route.params.subscribe(
      params => this.id = params['id'])
   }

  ngOnInit() {
    this.rest.deleteUserById(this.id).then(() => this.goBack());
      }
     
      goBack(): void {
        this.location.back();
      }

}
