import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Transaction } from 'src/app/contracts/transaction';
import { Account } from 'src/app/contracts/account';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'amount', 'receiver_id', 'sender_id'];
  dataSource: Transaction[];

  transactionForm: FormGroup;
  receiverId: number;
  senderId: number;
  amount: number;
  accounts: Account[];
  notPresent: boolean;
  transaction: Transaction;
  transactions: Transaction[];
  showTransactions: boolean = false;

  constructor(private rest: RestService, private formBuilder: FormBuilder) {
    rest.getAccounts().subscribe(res => {
      this.accounts = res;
      this.transactionForm = formBuilder.group({
        senderId: ['', {
          validators: [
            Validators.required,
            this.ValidateAccount.bind(this)
          ],
        }],
        receiverId: ['', {
          validators: [
            Validators.required,
            this.ValidateAccount.bind(this)
          ],
        }],
        amount: ['', {
          validators: [
            Validators.required,
            Validators.min(0)
          ]
        }]

      });
    })
  }

  ngOnInit() {
  }

  ValidateAccount(control: AbstractControl) {
    // console.log("control value:" + control.value);
    // console.log("user:" + this.users);
    this.notPresent = true;
    for (let account of this.accounts) {
      if (account.id == control.value) {
        this.notPresent = false;
        break;
      }
    }
    return this.notPresent ? { 'accountId': true } : null;
  }

  get f() {
    return this.transactionForm.controls;
  }

  postFormTransaction() {

    if (!this.transactionForm.valid) {
      console.log('invalid!');
      return;
    }
    this.addTransaction(this.transactionForm.get('senderId').value, this.transactionForm.get('receiverId').value, this.transactionForm.get('amount').value);
  }

  addTransaction(receiverId: number, senderId: number, amount: number) {
    const transaction = new Transaction(receiverId, senderId, amount)
    this.rest.postTransaction(transaction).subscribe(response => this.transaction = response)
  }

  getTransactions() {
    this.rest.getTransactions().subscribe(response => this.transactions = response)
  }

}





