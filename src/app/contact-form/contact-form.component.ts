import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
/* import {Contact} from '../contact'; */

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('contactForm') public contactForm : NgForm;
  contact = new Contact();
  submitted = false;
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
      this.submitted= true;
  }
}
export class Contact {
  id: number;
  name: string;
  phone: string;
  message: string;
}

