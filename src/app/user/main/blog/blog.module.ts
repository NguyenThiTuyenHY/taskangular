import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListblogComponent } from './listblog/listblog.component';
import { DetailblogComponent } from './detailblog/detailblog.component';



@NgModule({
  declarations: [ListblogComponent, DetailblogComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
