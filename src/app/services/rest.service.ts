import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../contracts/user';
import { Observable } from 'rxjs';
import { Identifiers } from '@angular/compiler';

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

  public deleteUserById(id: number): void {
    this.http.get(this.URL + 'users/delete/' + id);
  }

}
