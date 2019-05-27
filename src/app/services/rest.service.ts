import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../contracts/user';
import { Account } from '../contracts/account';
import { Observable } from 'rxjs';
import { Identifiers } from '@angular/compiler';
import { Transaction } from '../contracts/transaction';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public postUser(user: User): Observable<any> {
    return this.http.post(this.URL + 'users/post', user);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL + 'users');
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.URL + 'users/' + id);
  }

  public deleteUserById(id: number){
    this.http.delete(this.URL + 'users/delete/' + id)
  }

  public postAccount(account: Account): Observable<any> {
    return this.http.post(this.URL + 'accounts/post', account);
  }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.URL + 'accounts');
  }

  public getAccountById(id: number): Observable<Account> {
    return this.http.get<Account>(this.URL + 'accounts/' + id);
  }

  public makeTransaction(transaction: Transaction): Observable<any> {
    return this.http.post(this.URL + 'transactions', transaction);
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.URL + 'transactions');
  }

}
