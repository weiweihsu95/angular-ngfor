import { Component, OnInit ,Input} from '@angular/core';
import {Product} from "../product";
import {PRODUCTS} from "../product";
import {GoodsService} from "../goods.service";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() Product:Product;
  goods:any;
  constructor(private goodservice:GoodsService) {
    this.goodservice.getGoods().then(product=>{this.goods=product})
    this.Product={

      name: 'iPhone 13 iPhone 12',
      price: 30400,
      description: '最新手機iPhone 13',
    }

  }

  ngOnInit(): void {
  }

}
