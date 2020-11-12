import { Component, OnInit, Injector} from '@angular/core';
import { baseComponent } from '../../../lib/base-component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkcart',
  templateUrl: './checkcart.component.html',
  styleUrls: ['./checkcart.component.css']
})
export class CheckcartComponent extends baseComponent implements OnInit {

  constructor(private injector :Injector, private _builder: FormBuilder, private http: HttpClient, private rou:Router) {
    super(injector)
   }
  itemcart:any;
  totalpro: any;
  totalpri: any;
  myform: FormGroup;
  submitted = false;
  kh:any;
  dc:any;
  sdt:any;
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
    this._route.params.subscribe(params=>{
      var user = JSON.parse(localStorage.getItem("userlogin"));    
      this.kh = user==null?"":user.hoten;
      this.dc = user==null?"":user.diachi;
      this.sdt = user==null?"":user.sdt;
      console.log(this.dc);
    });
  }
  checkout(khachhang,diachi,sodienthoai,itemcart){   
    var user = JSON.parse(localStorage.getItem("userlogin"));    
    var ct: any[] = [];
    itemcart.forEach(element => {
      var a = {
        idmon: parseInt(element.id),
        soluong: parseInt(element.soluong),
        gia: parseInt(element.gia)
      }
      ct.push(a);
    });
    var formdata = {
      idkhach: user==null? parseInt(""):user.id,
      tenkhach: khachhang,
      diachigiao: diachi,
      sdtgiao: sodienthoai,
      tinhtrang:0,
      tongtien: this._cart.totalprice(),
      ctdhs: ct
    }
    this.http.post("https://localhost:44327/api/hoadon/create_hoa_don",formdata).subscribe(res=>{
      if(res==true){
        alert("Đặt hàng thành công");
        this.rou.navigate(['/']);
        this._cart.clearCart();        
      }
      else{
        alert("Đặt hàng thất bại");
      }
    })
  }
}
