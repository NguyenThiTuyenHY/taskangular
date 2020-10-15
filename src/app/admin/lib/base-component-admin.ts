import {Component,Injector,Renderer2, NgModule} from '@angular/core';
import { of as observableOf, fromEvent, Subject } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { ApiServices } from 'src/app/user/lib/api.component';
import { FileUpload } from 'primeng/fileupload';
import { map } from 'rxjs/operators';

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
        this.renderExternalScript('https://cdn.ckeditor.com/4.14.1/full/ckeditor.js').onload = ()=>{}
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
    public getencodeFromImage(fileupload: FileUpload){
        if(fileupload){
            if(fileupload == null || fileupload){
                return observableOf('');
            }
            let file: File = fileupload.files[0];
            console.log(file);   
            let reader: FileReader = new FileReader();
            reader.readAsDataURL(file);
            fromEvent(reader,'load').pipe(
                map((e)=>{
                    let result = '';
                    let tmp: any = reader.result;
                    let baseCode = tmp.substring(tmp.indexOf('base64,', 0) + 7)
                    result = file.name + ';' + file.size + ';' + baseCode;
                    console.log(file.name);
                    return result;
                })
            )
        }
        else {
            return observableOf(null);
        }
    }
    
}