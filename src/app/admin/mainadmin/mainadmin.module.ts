import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongkeComponent } from './thongke/thongke.component';
import {Routes, RouterModule, Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { MainadminComponent } from './mainadmin.component';
import { DangnhapComponent } from '../commonadmin/dangnhap/dangnhap.component';
import {ShareModule} from '../share/share.module';
import { from } from 'rxjs';
import { BananComponent } from './banan/banan.component';
import { BophanComponent } from './bophan/bophan.component';
import { PrimeNGConfig } from 'primeng/api';
import {TableModule} from 'primeng/table';
const Mainadminrouter: Routes = [
  {
    path: '',
    component: MainadminComponent,
    children: [
      {
        path: '',
        component: ThongkeComponent
      },
      {
        path: 'banan',
        component: BananComponent
      },
      {
        path: 'bophan',
        component: BophanComponent
      }
    ]
  },
  {
    path: 'dangnhap',
    component: DangnhapComponent
  }
]

@NgModule({
  declarations: [ThongkeComponent, MainadminComponent,BananComponent, BophanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Mainadminrouter),
    ShareModule,
    TableModule
  ]
})
export class MainadminModule {
  constructor(private primengConfig: PrimeNGConfig){}
 }
