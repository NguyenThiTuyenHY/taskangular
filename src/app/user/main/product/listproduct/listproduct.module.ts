import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListproductComponent } from './listproduct.component';
import {FormsModule} from '@angular/forms';


const productrouter: Routes =[
  {
    path: "\:id",
    component:ListproductComponent,
  }
]
@NgModule({
  declarations: [ListproductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productrouter),
    FormsModule
  ]
})
export class ListproductModule { }
