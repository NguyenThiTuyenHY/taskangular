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
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { LoaimonComponent } from './loaimon/loaimon.component';
import { MonanComponent } from './monan/monan.component';
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
  declarations: [ThongkeComponent, MainadminComponent,BananComponent, BophanComponent, LoaimonComponent, MonanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Mainadminrouter),
    ShareModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ]
})
export class MainadminModule {
  constructor(private primengConfig: PrimeNGConfig){}
 }
