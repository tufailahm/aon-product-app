import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductmoduleRoutingModule } from './productmodule-routing.module';
import { ProductmoduleComponent } from './productmodule.component';


@NgModule({
  declarations: [
    ProductmoduleComponent
  ],
  imports: [
    CommonModule,
    ProductmoduleRoutingModule
  ]
})
export class ProductmoduleModule { }
