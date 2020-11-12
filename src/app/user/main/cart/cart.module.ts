import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartproductComponent } from './cartproduct/cartproduct.component';
import { CheckcartComponent } from './checkcart/checkcart.component';
import {Routes,RouterModule} from "@angular/router";
import {ReactiveFormsModule} from '@angular/forms';
import { FollowcartComponent } from './followcart/followcart.component';
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
  },
  {
    path:"theodoidonhang",
    component: FollowcartComponent
  }
]

@NgModule({
  declarations: [CartproductComponent, CheckcartComponent, FollowcartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cartroutes),
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
