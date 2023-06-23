import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductData } from 'src/app/util/productdata';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //case2
  show = false;
  products: Product[] ;
  message! : string;
  constructor(public productService:ProductService){
    this.products = this.productService.getProducts();
    this.message = this.productService.changeReview("Awsome by product list");
   this.message = this.productService.getReview();

  }




}
