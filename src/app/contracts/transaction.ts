import { Account } from 'src/app/contracts/account';

export class Transaction {
    id: number;
    receiverId: number;
    senderId: number;
    amount: number;
  
    constructor(receiverId: number, senderId: number, amount: number) {
      this.receiverId = receiverId;
      this.senderId = senderId;
      this.amount = amount;
    }
  }