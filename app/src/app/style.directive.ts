import { style } from '@angular/animations';
import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]'
  
})
export class StyleDirective {
  
 
  

  constructor(private el:ElementRef) { 
     el.nativeElement.style.color='blue';
  }


   
}
