import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from "../share/header/header.component";
import {FooterComponent} from "../share/footer/footer.component";
import {SliderComponent} from "../share/slider/slider.component";
import {Routes,RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import { Route } from '@angular/compiler/src/core';
import { CartComponent } from './cart/cart.component';

const mainroutes : Routes = [
  {
    path:"",
    component: MainComponent,
    children: [
      {
        path:"",
        component:HomeComponent,
      },
      {
        path:"trangchu",
        component:HomeComponent
      },
      {
        path:"sanpham",
        loadChildren:()=>import("./product/product.module").then((m)=>m.ProductModule)
      }
    ]
  }
] 
@NgModule({
  declarations: [HomeComponent,HeaderComponent,FooterComponent,SliderComponent,CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainroutes)
  ]
})
export class MainModule { }
