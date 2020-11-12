import {Component, Renderer2, Injector} from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from './api.component';
import { CartService } from './cart.service';
import { LoginUserService } from './loginuser.service';
import { LoginService } from './search.service';
@NgModule({
    declarations: [],
    imports: [],
    exports:[]
  })
export class baseComponent{ 
    public _renderer:any;
    public _route: any;
    public _api:any;
    public _cart:any;
    public _search:any;
    public _login:any;
    constructor(injector: Injector) {  
        // this._renderer = rendererFactory.createRenderer(null, null);
        this._renderer = injector.get(Renderer2);
        this._route = injector.get(ActivatedRoute);
        this._api = injector.get(ApiServices);
        this._cart = injector.get(CartService);
        this._login = injector.get(LoginUserService);
    }
    public loadScripts() {
        this.renderExternalScript('assets/js/functions.js').onload = () => {}
      }
    public renderExternalScript(src: string): HTMLScriptElement {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        script.defer = true;
        this._renderer.appendChild(document.body, script);
        return script;
    } 
}