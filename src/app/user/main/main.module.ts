import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ShareModule} from "../share/share.module";
import {Routes,RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import { Route } from '@angular/compiler/src/core';
import {DangnhapComponent} from '../commonuser/dangnhap/dangnhap.component';
import {DangkyComponent} from '../commonuser/dangky/dangky.component';
import { baseComponent } from '../lib/base-component';
import { CommonuserModule } from '../commonuser/commonuser.module';
import { ProductnewComponent } from './home/productnew/productnew.component';
import { ProductbestComponent } from './home/productbest/productbest.component';
import { ErrorComponent } from '../commonuser/error/error.component';

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
        loadChildren:()=>import("./product/detailproduct/detailproduct.module").then((m)=>m.DetailproductModule)
      },
      {
        path:"loaimon",
        loadChildren:()=>import("./product/listproduct/listproduct.module").then((m)=>m.ListproductModule)
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
  },
  {
    path:"dangnhap",
    component: DangnhapComponent
  },
  {
    path:"dangky",
    component: DangkyComponent
  },
  {
    path: 'err',
    component: ErrorComponent
  }
] 
@NgModule({
  declarations: [HomeComponent, ProductnewComponent, ProductbestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainroutes),
    ShareModule,
    CommonuserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class  MainModule { 
  
}
