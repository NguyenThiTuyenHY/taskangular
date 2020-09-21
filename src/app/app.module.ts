import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './user/main/main.component';
import {Routes, RouterModule} from '@angular/router';
import {ShareModule} from './user/share/share.module';
const approute: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/mainadmin/mainadmin.module').then((m) => m.MainadminModule)
  },
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approute),
    ShareModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
