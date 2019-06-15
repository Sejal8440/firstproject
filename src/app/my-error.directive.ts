import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';


@Directive({
  selector: '[appMyError]'
})
export class MyErrorDirective {

  constructor(elr:ElementRef) {
    elr.nativeElement.style.background='red';
   }

}
