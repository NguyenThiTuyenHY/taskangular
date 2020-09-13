import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './user/main/main.component';
import {Routes,RouterModule} from '@angular/router';
const approute : Routes = [
  {
    path: "",
    loadChildren: () =>import("./user/main/main.module").then((m)=>m.MainModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
