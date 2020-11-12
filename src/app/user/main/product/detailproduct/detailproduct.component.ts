import { Component, OnInit, Injector } from '@angular/core';
import { baseComponent } from 'src/app/user/lib/base-component';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent extends baseComponent implements OnInit{

  constructor(private ij : Injector, private http: HttpClient) { 
    super(ij)
  }
  tag:any = 1;
  id:number;
  item:any;
  loaimon:any;
  soluong:number=1;
  itemlienquan:any;
  user:any;
  star:any=0;
  binhluan:any;
  avg:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      window.scroll(0,0);
      this.id = params["id"];
      this._api.get_all("api/monan/"+this.id).subscribe(res=>{
        this.item =res;
        // console.log(res);
        this._api.get_all("api/loaimon/"+res.idloaimon).subscribe(ress=>{
          this.loaimon = ress;
          this._api.get_all("api/monan/get_mon_an_lien_he?id="+this.id+"&&idloai="+this.loaimon.id).subscribe(ress=>{
            this.itemlienquan =ress;
          })
        });
        this._api.get_all("api/binhluan/get_binh_luan_by_id/"+this.item.id).subscribe(res=>{
          this.binhluan = res;
          console.log(this.binhluan);
        });   
        this._api.get_all("api/binhluan/get_binh_luan_avg_by_id/"+this.item.id).subscribe(res=>{
          this.avg = res;
        });   
      })
      setTimeout(()=>{
        this.loadScripts();
      });
      this.user = JSON.parse(localStorage.getItem("userlogin"));
      
    });  
  }
  addcart(item){
    this._cart.addCartSL(item,this.soluong);
    alert("Thêm thành công");
  }
  changequantity(sl){
    this.soluong = sl;
  }
  onbinhluan(txtbinhluan,id){
    var txtuser = this.user==null?"":this.user.id;
    let formdata = {
      idsp: id,
      iduser: txtuser,
      noidung: txtbinhluan,
      rate: this.star,
      trangthai:0
    }
    this.http.post("https://localhost:44327/api/binhluan/create_binh_luan",formdata).subscribe(res=>{
      if(res==true){
        alert("Bình luận thành công");
        this._api.get_all("api/binhluan/get_binh_luan_by_id/"+id).subscribe(res=>{
          this.binhluan = res;
          console.log(this.binhluan);
        });
        this._api.get_all("api/binhluan/get_binh_luan_avg_by_id/"+this.item.id).subscribe(res=>{
          this.avg = res;
        }); 
      }
      else{
        alert("Bình luận thất bại");
      }
    })
  }
}
