import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductData } from 'src/app/util/productdata';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  products: Product[] = [];
  message!: string;
  
  //DI
  constructor(
    public productService: ProductService,
    public messageService: MessageService,
    public router:Router
  ) {
    this.message = this.productService.getReview();
    this.productService.getProductsFromExternalFile()
      .subscribe((response) => this.products = response);
  }

  gotoProductSummary(productId: number,productName:string) {
    this.router.navigate(["productDetail/productSummary/",productId,productName]);
    console.log("You clicked on :" + productId);
  }

  removeProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe((data: any) => {
      this.message = 'Product with product id ' + productId + ' deleted successfully';
      this.refreshProducts();
    }, err => {
     // this.errorMessage = err;
    
    })
  }

  refreshProducts() {
    this.productService.getProductsFromExternalFile().subscribe((data: any) => {
      this.products = data;
    }, err => console.log("error"))
  }
}
