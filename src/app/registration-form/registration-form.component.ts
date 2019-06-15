import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  profileForm : FormGroup;
  headingDisplay:boolean= false;
  submitted: true;
  public color:string = 'green';
  public fullName= {
     "firstName": "Sejal",
     "lastName": "Agrawal"

  }
  public myStyle={
    'background-color': 'red',
    'margin-right': '20px',
    'border': '1px solid green',
    'padding': '10px 40px',
    'color': 'white',
    'font-weight': 'bold'
  }
  constructor() { }

  ngOnInit() {
   this.profileForm = new FormGroup({
      fName:  new FormControl(''), 
      lName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    });
  }
  onSubmit(){
    console.warn(this.profileForm.value);
  }
  updateProfile(){
    this.profileForm.patchValue({
      fName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  onClick(){
    this.headingDisplay = true;
  }
  sC(pasvalue:string){
    console.log(pasvalue);
    if(pasvalue=='red'){
      alert("red color");
    }
    else if(pasvalue=='blue'){
      alert("blue color");
    }
    else{
      alert("green color");
    }
  }
}
