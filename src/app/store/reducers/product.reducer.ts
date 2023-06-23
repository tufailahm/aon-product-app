// // import the interface
import { Product } from '../models/product';
import { ProductAction, ProductActionType } from '../actions/product.action';
// //create a dummy initial state

const initialState: Array<Product> = [
  {
    productId: 10918,
    productName: 'MineralWater',
    quantityOnHand: 20,
    price:10
  },
];

export function ProductReducer(
  state: Array<Product> = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case ProductActionType.ADD_ITEM:
      return [...state, action.product];
    default:
      return state;
  }
}
