import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { User } from 'src/app/contracts/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private rest: RestService, private formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      firstname: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3),
        ],
      }],
      lastname: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ],
      }],
      username: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ],
      }],
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ],
      }],
    });
  }

  get f() {
    return this.userForm.controls;
  }

  user: User;

  ngOnInit() {
  }

  postFormUser() {

    if (!this.userForm.valid) {
      console.log('invalid!');
      return;
    }

    this.user = new User(
      this.userForm.get('firstname').value,
      this.userForm.get('lastname').value,
      this.userForm.get('username').value,
      this.userForm.get('password').value
    );

    console.log(this.user);

    this.rest.postUser(this.user).subscribe(
      _ => console.log('Posted with formGroup!')
    );

  }



}
