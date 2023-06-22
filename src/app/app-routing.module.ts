import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutusComponent } from './aboutus';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';
import { ContactusComponent } from './contactus.component';
import { ProductGuardService } from './guard/product-guard.service';
import { checkproductGuard } from './guard/checkproduct.guard';
import { CityComponent } from './components/city/city.component';
import { UserformComponent } from './components/userform/userform.component';
const routes: Routes = [
  { path: '', component: ProductDetailComponent },
  { path: 'city', component: CityComponent },
  {
    path: 'productList', component: ProductListComponent,
    canActivate: [ProductGuardService,checkproductGuard],
    canDeactivate: []
  },
  {
    path: 'productDetail', component: ProductDetailComponent,
    children: [
      {
        path: 'productSummary/:pid/:pName', component: ProductSummaryComponent
      }
    ]
  },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'userForm', component: UserformComponent },

  { path: '**', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
