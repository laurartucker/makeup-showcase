import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
   selector: 'app-product-create',
   templateUrl: './product-create.component.html',
   styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

   productForm: FormGroup;

   website: string = '';
   category: string = '';
   sub_category: string = '';
   brand: string = '';
   affiliate_link: string = '';
   path: string = '';
   price: string = '';
   name: string = '';

   constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

   ngOnInit() {
      this.productForm = this.formBuilder.group({
         'website': [null, Validators.required],
         'category': [null, Validators.required],
         'sub_category': [null, Validators.required],
         'brand': [null, Validators.required],
         'price': [null, Validators.required],
         'name': [null, Validators.required]
      });
   }

   onFormSubmit(form: NgForm) {
      this.api.postProduct(form)
         .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/product-details', id]);
         }, (err) => {
            console.log(err);
         });
   }
}
