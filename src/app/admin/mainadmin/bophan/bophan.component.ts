import { Component, OnInit, Injector} from '@angular/core';
import { baseadmincomponent } from '../../lib/base-component-admin';

@Component({
  selector: 'app-bophan',
  templateUrl: './bophan.component.html',
  styleUrls: ['./bophan.component.css']
})
export class BophanComponent extends baseadmincomponent implements OnInit {
  public item:any;
  first = 0;
  rows = 10;
  constructor(private injector : Injector) {
    super(injector)
   }
  showDialog(){

  }
  ngOnInit(): void {
    this._api.params.subscribe(params=>{
      this._api.get_all('api/banan/get_all_banan').subscribe(res =>{
        this.item = res;
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })
  }

}
