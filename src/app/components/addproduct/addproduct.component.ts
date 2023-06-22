import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styles: [` 
  input.ng-invalid { border-left:5px solid red; }
  input.ng-valid { border-left: 5px solid green; }
  `]

})
export class AddproductComponent {
  /*  productForm = new FormGroup({
     productId: new FormControl('', Validators.required),
     productName: new FormControl('', [Validators.required, Validators.minLength(5)]),
     quantityOnHand: new FormControl('', Validators.required),
     price: new FormControl('', Validators.required)
 
   }) */
  constructor(public formBuilder: FormBuilder) { }

  productForm = this.formBuilder.group({
    productId: ['', Validators.required],
    productName: ['', Validators.required],
    quantityOnHand: ['', Validators.required],
    price: ['', Validators.required],
  })


  onSubmit() {
    console.log(this.productForm.value);
  }
}
