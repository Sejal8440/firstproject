import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private _userauth:UserAuthService) { }
  get isLoggedIn():boolean{
    return this._userauth.isLoggedIn;
  }
  logOut(){
    this._userauth.logout();
  }

  ngOnInit() {
  }

}
