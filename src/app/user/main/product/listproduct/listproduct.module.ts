import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListproductComponent } from './listproduct.component';


const productrouter: Routes =[
  {
    path: "\:id",
    component:ListproductComponent,
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productrouter)
  ]
})
export class ListproductModule { }
