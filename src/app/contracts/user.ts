export class User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    accounts: Account[];
  
    constructor(firstname: string, lastname: string, username: string, password:string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.username = username;
      this.password = password;
    }
  }
  