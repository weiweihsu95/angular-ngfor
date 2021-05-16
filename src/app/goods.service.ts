import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http:HttpClient) {

  }
  getGoods(){
    return this.http.get("assets/data/product.json").toPromise()
  }
}
