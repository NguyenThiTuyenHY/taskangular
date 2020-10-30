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
  itemuser: any;
  total:any=0;
  totalprice:any=0;
  itemcar:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._api.get_all("api/loaimon/get_all_loai_mon").subscribe(res=>{
        this.item = res;
        setTimeout(()=>{
          this.loadScripts();
        })
      })
      this.itemuser = JSON.parse(localStorage.getItem("userlogin"));
    })
    this._cart.items.subscribe(res=>{
      this.itemcar = res;
      console.log(res);
      this.total = this._cart.totalproduce();
      this.totalprice = this._cart.totalprice();
      console.log(this.totalprice);
    })
  }
  deleteitem(mamon){
    this._cart.deleteItem(mamon);
    alert("Xoá thành công");
  }
  search(txtsearch,selectsearch){
    this._rou.navigate(['/timkiem',txtsearch,selectsearch]);    
  }
  dangnhap(){
    var url = this._rou.url;
    localStorage.setItem("url",url);
    this._rou.navigate(["/dangnhap"]);
  }
  dangxuat(){
    var url = this._rou.url;
    localStorage.removeItem("userlogin");
    window.location.reload();
  }
}
