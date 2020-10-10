import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DangkyComponent} from './dangky/dangky.component';
import {DangnhapComponent} from './dangnhap/dangnhap.component';
import { Router, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [DangkyComponent,DangnhapComponent, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    DangnhapComponent,
    DangkyComponent
  ]
})
export class CommonuserModule { }
