import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongkeComponent } from './thongke/thongke.component';
import {Routes, RouterModule, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { MainadminComponent } from './mainadmin.component';
import { DangnhapComponent } from '../common/dangnhap/dangnhap.component';
import {ShareModule} from '../share/share.module';
import { from } from 'rxjs';
const Mainadminrouter: Routes = [
  {
    path: '',
    component: MainadminComponent,
    children: [
      {
        path: '',
        component: ThongkeComponent
      }
    ]
  },
  {
    path: 'dangnhap',
    component: DangnhapComponent
  }
]

@NgModule({
  declarations: [ThongkeComponent, MainadminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Mainadminrouter),
    ShareModule
  ]
})
export class MainadminModule { }
