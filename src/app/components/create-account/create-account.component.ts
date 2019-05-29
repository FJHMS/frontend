import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Account } from 'src/app/contracts/account';
import { User } from 'src/app/contracts/user';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})

export class CreateAccountComponent implements OnInit {

  accountForm: FormGroup;
  account: Account;
  user: User;
  users: User[];
  notPresent: boolean;
  
  constructor(private rest: RestService, private formBuilder: FormBuilder) {
    rest.getUsers().subscribe(res => {
      this.users = res;
      this.accountForm = formBuilder.group({
        balance: ['', {
          validators: [
            Validators.required,
            Validators.min(0)
          ],
        }],
        userId: ['', {
          validators: [
            Validators.required,
            this.ValidateUser.bind(this)
          ],
        }],
      });
    });
  }

  ngOnInit() { }

  ValidateUser(control: AbstractControl) {
    console.log("control value:" + control.value);
    console.log("user:" + this.users);
    this.notPresent = true;
    for (let user of this.users) {
      if (user.id == control.value) {
        this.notPresent = false;
        break;
      }
    }
    return this.notPresent ? { 'userId': true } : null;
  }

  get f() {
    return this.accountForm.controls;
  }

  postFormAccount() {

    if (!this.accountForm.valid) {
      console.log('invalid!');
      return;
    }
    this.getUser(this.accountForm.get('userId').value);
  }

  getUser(userId: number) {
    this.rest.getUserById(userId).subscribe(
      response => {
        this.user = response;
        this.addAccount(this.accountForm.get('balance').value, this.user)
      })
  }

  addAccount(balance: number, user: User) {
    const account = new Account(balance, user);
    this.rest.postAccount(account).subscribe(response => {
      this.account = response;
      console.log('Posted with formGroup!');
      console.log(account);
    });
  }
}




