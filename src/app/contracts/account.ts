import { User } from './user';

export class Account {
    id: number;
    balance: number;
    user: User;
  
    constructor(balance: number, user: User) {
      this.balance = balance;
      this.user = user;
    }
  }

 