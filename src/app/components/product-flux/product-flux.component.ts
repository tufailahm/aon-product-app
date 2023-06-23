import { Component, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AddItemAction } from 'src/app/store/actions/product.action';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-product-flux',
  templateUrl: './product-flux.component.html',
  styleUrls: ['./product-flux.component.css']
})
export class ProductFluxComponent implements OnInit {

  productItems$: Observable<Array<Product>>;

  //DI
  constructor(private store: Store<AppState>) {}


  ngOnInit(){
    //fetching the stored item from store and productItems
    this.productItems$ = this.store.select((store) => store.product);
  }

  addProduct(form: NgForm){
    this.store.dispatch(new AddItemAction(form.value));
    form.reset();
  }
}
