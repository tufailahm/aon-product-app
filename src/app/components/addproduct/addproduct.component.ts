import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  productForm = new FormGroup({
    productId: new FormControl('', Validators.required),
    productName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    quantityOnHand: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)

  })

  onSubmit(){
    console.log(this.productForm.value);
  }
}
