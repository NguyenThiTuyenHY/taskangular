import { Component,AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'taskangular';
  // AfterViewInit(){
  //   this.loadScripts();
  // }
  // public loadScripts() {
  //   this.renderExternalScript('assets/js/functions.js').onload = () => {
  //   }
  // }
}
