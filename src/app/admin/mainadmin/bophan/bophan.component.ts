import { Component, OnInit, Injector} from '@angular/core';
import { baseadmincomponent } from '../../lib/base-component-admin';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-bophan',
  templateUrl: './bophan.component.html',
  styleUrls: ['./bophan.component.css'],
  providers: [MessageService]
})
export class BophanComponent extends baseadmincomponent implements OnInit {
  public item:any;
  first = 0;
  rows = 10;
  txtbophan:any;
  id:any;
  constructor(private injector : Injector, private messageService: MessageService) {
    super(injector)
   }
  isinsert = true;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._api.get_all('api/Bophan/get_all_bo_phan').subscribe(res =>{
        this.item = res;
      })
    })
  }
  showDialog() {
    this.isinsert = true;
    this.id = 0;
    this.txtbophan = "";
  }
  showDialogedit(id){
    this.id = id;
    this.isinsert = false;
    this._api.get_all('api/Bophan/get_bo_phan_by_id/'+id).subscribe(res =>{
      this.item = res;
      this.txtbophan = this.item.tenbp;
    })
  }
  insert(){
    alert(this.isinsert);
    if(this.isinsert==true){
      this._api.get_all('api/Bophan/create_bo_phan?tenbp='+this.txtbophan).subscribe(res=>{
        if(res){
          this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Thêm thành công'});
          this._api.get_all('api/Bophan/get_all_bo_phan').subscribe(res =>{
            this.item = res;
          })
        }
        else{
          this.messageService.add({severity:'error', summary: 'Thất bại', detail: 'Thêm thất bại'});
        }
      })
    }
    else{
      this._api.get_all('api/Bophan/update_bo_phan?id='+this.id+'&&tenbp='+this.txtbophan).subscribe(res=>{
        if(res){
          this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Thêm thành công'});
          this._api.get_all('api/Bophan/get_all_bo_phan').subscribe(res =>{
            this.item = res;
          })
        }
        else{
          this.messageService.add({severity:'error', summary: 'Thất bại', detail: 'Thêm thất bại'});
        }
      })
    }
  }
  reset_form(){

  }
}
