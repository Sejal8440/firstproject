import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { ContactFormComponent } from './contact-form.component';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<ContactFormComponent> {
  canDeactivate(component: ContactFormComponent): boolean{
    if(component.contactForm.dirty){
      return confirm("are you sure to discard your changes??");
    }
     return true;
  }
  constructor() { }
}
