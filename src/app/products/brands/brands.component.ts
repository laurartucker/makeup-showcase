import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// db.products.group({
//    "key": {
//        "brand": true
//    },
//    "initial": {
//        "countstar": 0
//    },
//    "reduce": function(obj, prev) {
//        if (true != null) if (true instanceof Array) prev.countstar += true.length;
//        else prev.countstar++;
//    }
// });