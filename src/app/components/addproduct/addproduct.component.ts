import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(
    public formBuilder: FormBuilder,
    public productService: ProductService) { }

  productForm!: FormGroup;
  successMessage! :string;

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      quantityOnHand: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  onSubmit() {
    console.log(this.productForm.value);
    //save the product in db
    this.productService.saveProduct(this.productForm.value).subscribe((data:any) => {
      this.successMessage = 'Product with product id '+this.productForm.value.productId+ ' saved successfully';
      //redirect to productlist component
      
    },err => console.log("error occurred") )
  }
}
