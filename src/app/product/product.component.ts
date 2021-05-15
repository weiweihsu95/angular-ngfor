import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {PRODUCTS} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

//12行這個export class ProductComponent 反正寫到Component前面就大寫
export class ProductComponent implements OnInit {
  //寫一個class 去定義這個class
  Product:Product[];
  selectedProduct:any;

  constructor() {
    this.Product=PRODUCTS;
  }
//上面constructor是建構函數

  ngOnInit(): void {
  }
 selectedItem(product:Product):void{
    this.selectedProduct=product;
//let product of Product
 }
}
