import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus.component';
import { AboutusComponent } from './aboutus';
import { HelpComponent } from './help.component';
import { ManagerComponent } from './components/manager/manager.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './components/message/message.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MessageService } from './services/message.service';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';
import { CityComponent } from './components/city/city.component';
import { WeatherComponent } from './components/weather/weather.component';
import { UserformComponent } from './components/userform/userform.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent, 
    ContactusComponent,
     AboutusComponent, 
     HelpComponent, ManagerComponent, EmployeeComponent, MessageComponent, ProductListComponent, ProductDetailComponent, ProductSummaryComponent, CityComponent, WeatherComponent, UserformComponent, AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MessageService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
