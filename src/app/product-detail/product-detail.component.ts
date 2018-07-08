import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

import Product from '../../../models/Product';

@Component({
   selector: 'app-product-detail',
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

   product: any;

   constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

   ngOnInit() {
      this.getProductDetails(this.route.snapshot.params['id']);
   }

   getProductDetails(id) {
      this.api.getProduct(id)
         .subscribe(data => {
            this.product = data;
         });
   }

   deleteProduct(id) {
      this.api.deleteProduct(id)
         .subscribe(res => {
            this.router.navigate(['/products']);
         }, (err) => {
            console.log(err);
         }
         );
   }

}
