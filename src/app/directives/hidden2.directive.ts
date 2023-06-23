import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myHidden2]'
})
export class Hidden2Directive {

  constructor(public el: ElementRef, public renderer: Renderer2) { }
  
  @Input()
  set myHidden2(myHidden: any) {
    console.log("inside directive 2:"+myHidden)
    if (myHidden) {
      console.log('hide');
      this.el.nativeElement.style.display = 'none';

    }
  }

}
