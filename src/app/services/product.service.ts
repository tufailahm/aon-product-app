import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productReview!: string;
  getMessage() {
    return "Hello";
  }
  changeReview(msg: string) {
    this.productReview = msg;
    return this.productReview;
  }
  getReview() {
    return this.productReview;
  }

  private _url: string = "http://localhost:4200/assets/productData.json";
  //private _url : string = "http://localhost:9090/product"
 // private _url : string = "http://localhost:3000/product"
  constructor(public httpClient: HttpClient) {
  }

  ///get
  getProductsFromExternalFile() : Observable<Product []> {
    return this.httpClient.get<Product []>(this._url);
  }

















  

  getProducts() {
    return [
      {
        "productId": 1212,
        "productName": "NewBottle",
        "quantityOnHand": 190,
        "price": 1200
      },

      {
        "productId": 1121222,
        "productName": "Pendrive",
        "quantityOnHand": 299,
        "price": 2300
      },

      {
        "productId": 1212123,
        "productName": "Sony",
        "quantityOnHand": 300,
        "price": 98000
      }
    ]
  }
}
