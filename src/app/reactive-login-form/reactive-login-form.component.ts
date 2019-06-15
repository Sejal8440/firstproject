import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent implements OnInit {

  userName='admin';
  password='admin';
  constructor() { }

  ngOnInit() {
  }
  onClick(one, two){
   if(this.userName==one && this.password==two){
     alert("working");
   }
  }

}
