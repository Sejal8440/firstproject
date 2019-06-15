import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  currentUser : User;
  redirectURL: string;
  constructor(private _route: Router) { }
  get isLoggedIn():boolean{
    return !! this.currentUser;
  }
  logIn(username:string, password:string):void{
    if(username==='admin'){
      this.currentUser={
        userName:'admin',
        passWord:password  

      }
      return;
    }
    this.currentUser={
      userName:username,
      passWord:password
    }
  }
  logout(){
    this.currentUser=null;
    this._route.navigate(['/home']);
  }
}
