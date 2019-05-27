import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Transaction } from 'src/app/contracts/transaction';
import { Account } from 'src/app/contracts/account';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private rest: RestService) { }

  receiverId: number;
  senderId: number;
  amount: number;
  transaction: Transaction;
  transactions: Transaction[];
  
  ngOnInit() {
  }

  makeTransaction(){
    const transaction = new Transaction(this.receiverId,this.senderId,this.amount)
    this.rest.makeTransaction(transaction).subscribe(response => this.transaction = response) 
  }

  getTransactions(){
    this.rest.getTransactions().subscribe(response => this.transactions = response)
  }
}
    



