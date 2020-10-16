import { Component, OnInit, Injector } from '@angular/core';
import { baseComponent } from 'src/app/user/lib/base-component';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent extends baseComponent implements OnInit {

  constructor(private injector:Injector) { 
    super(injector)
  }
  item: any;
  total: any;
  totalprice: any;
  ngOnInit(): void {
    this._cart.items.subscribe(res=>{
      this.item = res;
      this.total = this._cart.totalproduce();
      this.totalprice = this._cart.totalprice();
    })
  }
  deleteitem(mamon){
    this._cart.deleteItem(mamon);
    alert("Xoá thành công");
  }
  clearcart(){
    this._cart.clearCart();
    alert("Xoá thành công");
  }
}
