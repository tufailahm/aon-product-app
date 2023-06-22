export class Product
{
    productId : number;
    productName! : string;
    quantityOnHand! : number;
    price! : number;

    constructor(){
        this.productId = 100;
    }
}