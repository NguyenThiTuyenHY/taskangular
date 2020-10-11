import { Component, OnInit, Injector } from '@angular/core';
import { baseadmincomponent } from '../../lib/base-component-admin';

@Component({
  selector: 'app-banan',
  templateUrl: './banan.component.html',
  styleUrls: ['./banan.component.css']
})
export class BananComponent extends baseadmincomponent implements OnInit {

  constructor(private _in: Injector){
    super(_in)   
  }
  item: any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._api.get_all('api/banan/get_all_banan').subscribe(res =>{
        this.item = res;
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })
  }
}
