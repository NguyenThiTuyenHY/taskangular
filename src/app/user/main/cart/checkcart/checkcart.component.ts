import { Component, OnInit, Injector} from '@angular/core';
import { baseComponent } from '../../../lib/base-component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkcart',
  templateUrl: './checkcart.component.html',
  styleUrls: ['./checkcart.component.css']
})
export class CheckcartComponent extends baseComponent implements OnInit {

  constructor(private injector :Injector, private _builder: FormBuilder) {
    super(injector)
   }
  itemcart:any;
  totalpro: any;
  totalpri: any;
  myform: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this._cart.items.subscribe(res=>{
      this.itemcart = res;
      this.totalpro = this._cart.totalproduce();
      this.totalpri = this._cart.totalprice();
      setTimeout(()=>{
        this.loadScripts();
      })
    });
    this.myform = this._builder.group({
      txtkhachhang: ['',Validators.required],
      txtdiachi: ['',Validators.required],
      txtsodienthoai: ['',Validators.required]
    });
  }
  checkout(){
    var idkhach;
    var tenkhach ;
    var sdtgiao;
    var diachigiao;
    var user = JSON.parse(localStorage.getItem("userlogin"));
    if(user!=null){

    }
    else{

    }
    let hoadon = {}
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
  }
}
