import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  flag:boolean;
  display :boolean = false;
  greater:number;
  form1: FormGroup;
  constructor() { }
  ngOnInit() {
   this.form1= new FormGroup({
     fName: new FormControl(''),
     lName: new FormControl('')
   });
  }

  checkValue() {
     let firstNumber = parseInt(this.form1.value.fName);
     let secondNumber = parseInt(this.form1.value.lName);

     if(firstNumber && secondNumber >= 0 ){
      this.display = true;
    if (firstNumber > secondNumber) {
      console.log("fine");
      this.flag=true;
      this.greater = firstNumber;
    }
    else {
      console.log("jhxyjh" + secondNumber);
      this.flag=false;
      this.greater = secondNumber;
    }
  }
  else{
    this.display = false;
  }
  }
    
}
