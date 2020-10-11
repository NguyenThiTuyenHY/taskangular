import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailproductComponent } from './detailproduct.component';
import { RouterModule, Routes } from '@angular/router';

const productrouter: Routes =[
  {
    path: "\:id",
    component:DetailproductComponent,
  }
]

@NgModule({
  declarations: [DetailproductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productrouter)
  ]
})
export class DetailproductModule { }
