import {Component,Injector,Renderer2, NgModule} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiServices } from 'src/app/user/lib/api.component';
import {Subject} from 'rxjs'
@NgModule({
    declarations: [],
    imports: [],
    exports:[]
})
export class baseadmincomponent{
    public unsubscribe = new Subject();
    public _http:any;
    public _api:any;
    public _renderer: any;
    public _route: any; 
    constructor(private inject : Injector){
        this._api = inject.get(ApiServices);
        this._renderer = inject.get(Renderer2);
        this._route = inject.get(ActivatedRoute);
    }
    public loadScripts() {
        this.renderExternalScript('assets/admin/js/sb-admin-2.min.js').onload = () => {}
        this.renderExternalScript('assets/admin/vendor/datatables/jquery.dataTables.min.js').onload = () => {}
        this.renderExternalScript('assets/admin/vendor/datatables/dataTables.bootstrap4.min.js').onload = () => {}
        this.renderExternalScript('assets/admin/js/demo/datatables-demo.js').onload = () => {}
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