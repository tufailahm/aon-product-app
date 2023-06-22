import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent {
    productId!: number;
    productName!: string;
    constructor(public activatedRoute:ActivatedRoute){
        this.productId = -1;
        this.productName = "NA";
    } 
    ngOnInit(){
        console.log("NgOnInit of product summary called");
      //  this.productId = this.activatedRoute.snapshot.params["pid"];
      //  this.productName = this.activatedRoute.snapshot.params["pName"];
        this.activatedRoute.params.subscribe(params => this.productId = params["pid"])
        this.activatedRoute.params.subscribe(params => this.productName = params["pName"])
    }
}