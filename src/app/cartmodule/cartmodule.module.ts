import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartmoduleRoutingModule } from './cartmodule-routing.module';
import { CartmoduleComponent } from './cartmodule.component';


@NgModule({
  declarations: [
    CartmoduleComponent
  ],
  imports: [
    CommonModule,
    CartmoduleRoutingModule
  ]
})
export class CartmoduleModule { }
