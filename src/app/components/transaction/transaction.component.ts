import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Transaction } from 'src/app/contracts/transaction';
import { Account } from 'src/app/contracts/account';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  senderIdForm = new FormControl()
  receiverIdForm = new FormControl()
  amountForm = new FormControl()

  displayedColumns: string[] = ['id', 'amount', 'receiver_id', 'sender_id'];
  dataSource: Transaction[];

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

      this.senderIdForm = new FormControl('', [
        Validators.required,
        this.validateAccount.bind(this)
      ])

      this.receiverIdForm = new FormControl('', [
        Validators.required,
        this.validateAccount.bind(this)
      ])

      this.amountForm = new FormControl('', [
        Validators.required,
        Validators.min(0)
      ])
    })
  }

  ngOnInit() {
  }

  validateAccount(control: AbstractControl) {
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


  postFormTransaction() {

    this.addTransaction(this.senderIdForm.value, this.receiverIdForm.value, this.amountForm.value);
  }

  addTransaction(receiverId: number, senderId: number, amount: number) {
    const transaction = new Transaction(this.receiverIdForm.value, this.senderIdForm.value, this.amountForm.value)
    this.rest.postTransaction(transaction).subscribe(response => this.transaction = response)
  }

  getTransactions() {
    this.rest.getTransactions().subscribe(response => this.transactions = response)
  }

}





