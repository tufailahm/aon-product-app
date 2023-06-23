import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductmoduleComponent } from './productmodule.component';

const routes: Routes = 
[{ path: '', component: ProductmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductmoduleRoutingModule { }
