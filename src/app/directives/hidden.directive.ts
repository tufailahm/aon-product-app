import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {

  constructor(el:ElementRef,r:Renderer2) {
        el.nativeElement.style.display = 'none';
   }
   
}
