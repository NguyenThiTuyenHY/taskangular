import { Component, OnInit, Injector } from '@angular/core';
import { baseadmincomponent } from '../../lib/base-component-admin';

@Component({
  selector: 'app-banan',
  templateUrl: './banan.component.html',
  styleUrls: ['./banan.component.css']
})
export class BananComponent extends baseadmincomponent implements OnInit {
  display = false;
  displayedit = false;
  constructor(private _in: Injector){
    super(_in)   
  }
  first = 0;
  rows = 10;
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
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.item? this.first === (this.item.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.item ? this.first === 0 : true;
  }
  showDialog(){
    this.display = true;
  }
  showDialogdisplayedit(){
    this.displayedit = true;
  }
}
