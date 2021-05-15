import { Component, OnInit ,Input} from '@angular/core';
import {Product} from "../product";
import {PRODUCTS} from "../product";
import {Detail} from "../detail";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() Product:Product;

  constructor() {
    this.Product={

      name: 'iPhone 13 iPhone 12',
      price: 30400,
      description: '最新手機iPhone 13',
    }

  }

  ngOnInit(): void {
  }

}
