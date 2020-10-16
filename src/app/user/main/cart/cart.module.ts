import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartproductComponent } from './cartproduct/cartproduct.component';
import { CheckcartComponent } from './checkcart/checkcart.component';
import {Routes,RouterModule} from "@angular/router";
const cartroutes: Routes =[
  {
    path:"",
    component: CartproductComponent
  },
  {
    path:"sanpham",
    component: CartproductComponent
  },
  {
    path:"dathang",
    component: CheckcartComponent
  }
]

@NgModule({
  declarations: [CartproductComponent, CheckcartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cartroutes),
    RouterModule
  ]
})
export class CartModule { }
