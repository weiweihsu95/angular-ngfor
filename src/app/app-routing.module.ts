import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ParksComponent} from "./parks/parks.component";
import {ParkDetailComponent} from "./park-detail/park-detail.component";

const routes: Routes = [
  {path: '',redirectTo:'/product',pathMatch:'full'},
  {path: 'product' , component:ProductComponent},
  {path: 'detail/:id' , component:ProductDetailComponent},
  {path: 'parks' , component:ParksComponent},
  {path: 'parkDetail/:id' , component:ParkDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
