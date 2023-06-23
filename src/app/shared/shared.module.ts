import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenDirective } from '../directives/hidden.directive';
import { MyIfDirective } from '../directives/my-if.directive';
import { Hidden2Directive } from '../directives/hidden2.directive';

@NgModule({
  declarations: [    HiddenDirective, 
    Hidden2Directive, MyIfDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HiddenDirective, 
    Hidden2Directive, MyIfDirective
  ]
})
export class SharedModule { }
