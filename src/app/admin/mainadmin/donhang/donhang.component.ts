import { Component, OnInit, Injector} from '@angular/core';
import { baseComponent } from 'src/app/user/lib/base-component';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css'],
  providers: [MessageService]
})
export class DonhangComponent extends baseComponent implements OnInit {

  constructor(private injector: Injector, private messageService:MessageService) { 
    super(injector)
  }
  item:any;
  tinhtrang:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      window.scroll(0,0);
      this.tinhtrang = params["id"];
      this._api.get_all("api/hoadon/get_all_don_hang_tinhtrang/"+this.tinhtrang).subscribe(res=>{
        this.item = res;
      });
    });
    
  }
  changestate(id){
    this._api.get_all("api/hoadon/chuyen_doi_tinh_trang/"+id).subscribe(res=>{
      if(res){
        this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Chuyển trạng thái thành công'});
        this._api.get_all("api/hoadon/get_all_don_hang_tinhtrang/"+this.tinhtrang).subscribe(res=>{
          this.item = res;
        });
      }
      else{
        this.messageService.add({severity:'error', summary: 'Thất bại', detail: 'Chuyển trạng thái thất bại'});
      }
    });
    
  }

}
