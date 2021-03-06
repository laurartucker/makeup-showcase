import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

import Product from '../../../models/Product';

@Component({
   selector: 'app-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

   products: any;
   dataSource = new ProductDataSource(this.api);

   constructor(private api: ApiService) { }

   ngOnInit() {
      this.api.getProducts()
         .subscribe(res => {
            this.products = res;
         }, err => {
            console.log(err);
         });
   }
}

export class ProductDataSource extends DataSource<any> {
   constructor(private api: ApiService) {
      super()
   }

   connect() {
      return this.api.getProducts();
   }

   disconnect() {

   }
}
