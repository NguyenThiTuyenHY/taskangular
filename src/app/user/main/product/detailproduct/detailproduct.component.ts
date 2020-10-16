import { Component, OnInit, Injector } from '@angular/core';
import { baseComponent } from 'src/app/user/lib/base-component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent extends baseComponent implements OnInit{

  constructor(private ij : Injector) { 
    super(ij)
  }
  id:number;
  item:any;
  loaimon:any;
  soluong:number;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.id = params["id"];
      this._api.get_all("api/monan/"+this.id).subscribe(res=>{
        this.item =res;
        // console.log(res);
        this._api.get_all("api/loaimon/"+res.idloaimon).subscribe(ress=>{
          this.loaimon = ress;
          console.log(ress);
        })
      })
      setTimeout(()=>{
        this.loadScripts();
      });
    });  
  }
  addcart(item){
    this._cart.addCartSL(item,this.soluong);
    alert("Thêm thành công");
  }
  changequantity(sl){
    this.soluong = sl;
  }
}
