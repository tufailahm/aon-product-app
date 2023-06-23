import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
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

 // private _url: string = "http://localhost:4200/assets/productData.json";
  //private _url : string = "http://localhost:9090/product"
  private _url : string = "http://localhost:3000/product"
  constructor(public httpClient: HttpClient) {
  }

  ///get
  getProductsFromExternalFile() : Observable<Product []> {
    return this.httpClient.get<Product []>(this._url);
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  //Getting a single product
  //"http://localhost:3000/product/99
  getProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this._url}/${productId}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //Deleting a single product
  //"http://localhost:3000/product/99 - DELETE
  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this._url}/${productId}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //saving a single product
  //"http://localhost:3000/product
  saveProduct(product:Product): Observable<Product> {
    return this.httpClient.post<Product>(this._url,product,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

    //edit/update a single product
    //Please complete this 
  //localhost:3000/product/71 - PUT and in body we have to pass product object
  updateProduct(productId:number,product:Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this._url}/${productId}`,product,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Some Error Happened\n Error Details \nError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
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
