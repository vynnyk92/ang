import { Injectable } from '@angular/core';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  currentUser: IUser;
  public loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'firstName',
      lastName: 'lastName',
      userName: userName
    };
  }

  isAunthentificated(){
    return !!this.currentUser;
  }
}
