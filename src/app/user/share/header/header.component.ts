import { Inject } from '@angular/compiler/src/core';
import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { baseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends baseComponent implements OnInit {
  private itemsSearch = new BehaviorSubject<any[]>([]);
  items = this.itemsSearch.asObservable();
  constructor(private injector: Injector,private _rou: Router) {
    super(injector)
   }
  item: any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._api.get_all("api/loaimon/get_all_loai_mon").subscribe(res=>{
        this.item = res;
        console.log(this.item);
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })
  }
  search(txtsearch,selectsearch){
    this._rou.navigate(['/timkiem',txtsearch,selectsearch]);
  }

}
