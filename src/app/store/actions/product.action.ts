import { Action } from '@ngrx/store';
import { Product } from '../models/product';



export class AddItemAction implements Action {
  readonly type = ProductActionType.ADD_ITEM;
  //add an optional payload
  constructor(public product: Product) {}
}

export enum ProductActionType {
  ADD_ITEM = '[PRODUCT] Add Product',
}
export type ProductAction = AddItemAction;
