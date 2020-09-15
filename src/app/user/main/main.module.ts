import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ShareModule} from "../share/share.module";
import {Routes,RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import { Route } from '@angular/compiler/src/core';
import { FooterComponent } from '../share/footer/footer.component';

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
      },
      {
        path:"giohang",
        loadChildren:()=>import("./cart/cart.module").then((m)=>m.CartModule)
      },
      {
        path:"tintuc",
        loadChildren:()=>import("./blog/blog.module").then((m)=>m.BlogModule)
      }
    ]
  }
] 
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainroutes),
    ShareModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
