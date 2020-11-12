import { Component, OnInit, Injector} from '@angular/core';
import { baseadmincomponent } from '../../lib/base-component-admin';
import {FormGroup} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2'
declare var CKEDITOR: any;
declare var $:any;
@Component({
  selector: 'app-monan',
  templateUrl: './monan.component.html',
  styleUrls: ['./monan.component.css'],
  providers: [MessageService]
})
export class MonanComponent extends baseadmincomponent implements OnInit {
  constructor(private injector: Injector, private messageService: MessageService, private http: HttpClient) {
    super(injector)
  }
  first = 0;
  rows = 5;
  item: any;
  ckeditorContent: any;
  txttenmon:any;
  txtdonvi:any;
  txtdongia: any;
  display = false;
  uploadedFiles: any[]=[];
  monanform = FormGroup;
  tenmon:any;
  protocol:string;
  bophan:any;
  selectloai: any = 1;
  base64:any = "";
  file:any;
  checklm: any = 0;
  ngOnInit(): void {
    this._route.params.subscribe(parmas=>{
      this._api.get_all("api/loaimon/get_all_loai_mon").subscribe(res=>{
        this.bophan = res;
      })
      this._api.get_all("api/monan/get_all_mon_an").subscribe(res=>{
        this.item = res;
      })
    })
    CKEDITOR.on('instanceCreated', function (event, data) {
      var editor = event.editor,
      element = editor.element;
      editor.name = "content"
   });
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
    $("#imgTest").html("<img></img>");
    this.display = true;
    this.protocol="create";
    this.txttenmon = "";
    this.txtdonvi = "";
    this.txtdongia = "";
    this.checklm = 0;  
  }
  sing_mn:any;
  showDialogedit(id){
    this.display = true;
    this.protocol="edit";
    this._api.get_all("api/monan/"+id).subscribe(res=>{
      this.sing_mn = res;
      console.log(this.sing_mn);
      this.txttenmon = this.sing_mn.tenmon;
      this.txtdonvi = this.sing_mn.donvitinh;
      this.txtdongia = this.sing_mn.gia;
      // this.ckeditorContent = this.sing_mn.mota;
      CKEDITOR.instances.content.setData("hello");
      this.checklm = this.sing_mn.idloaimon;
    })
  }
  changeImga(event){
    this.file = event.target;
    console.log(URL.createObjectURL(event.target.files[0]));
    $("#imgTest").html('<img src="'+URL.createObjectURL(event.target.files[0])+'" style="width: 100px; height: 100px;">');
  }
  
  // onUploadFile(event){
  //   for(let file of event.files) {
  //     this.uploadedFiles.push(file);
  //     this.encodeImageFileAsURL(file);
  //     console.log(this.base64);
  //   }
  //   this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Tải ảnh thành công'});
  // }
  luu1(){
    console.log(CKEDITOR.instances.content.setData("Hello"));
  }
   luu(){
    console.log(this.file);
    this.getEncodeFromImage(this.file).subscribe((data: any): void => {
      this.base64 = data==null?"":data;
      if(this.protocol=="create"){   
        let formdata ={
          tenmon:this.txttenmon,
          donvitinh:this.txtdonvi,
          gia:parseInt(this.txtdongia),
          mota:this.ckeditorContent,
          hinhanh:this.base64,
          idloaimon:parseInt(this.selectloai)
        }
        this.http.post('https://localhost:44327/api/monan/create_mon_an',formdata).subscribe(res=>{
          this.display = false;
          if(res==true){
            this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Thêm món ăn thành công'});
            this._api.get_all("api/monan/get_all_mon_an").subscribe(res=>{
              this.item = res;
            })
          }
          else{
            this.messageService.add({severity:'error', summary: 'Thất bại', detail: 'Thêm món ăn thất bại'});
          }
        })
      }
      if(this.protocol=="edit"){
        let formdata ={
          tenmon:this.txttenmon,
          donvitinh:this.txtdonvi,
          gia:parseInt(this.txtdongia),
          mota:this.ckeditorContent,
          hinhanh:this.base64,
          idloaimon:parseInt(this.selectloai)
        }
        console.log(formdata);
        this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Sửa món ăn thành công'});
      }
    })
   }
   delete_mn(id){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Bạn chắc chắn chứ?',
      text: "Bạn sẽ không thể thiết lập lại điều này!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có, xoá nó',
      cancelButtonText: 'Không, trở về',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete("https://localhost:44327/api/monan/delete_mon_an/"+id).subscribe(res=>{
          if(res){
            this._api.get_all("api/monan/get_all_mon_an").subscribe(res=>{
              this.item = res;
            })
            swalWithBootstrapButtons.fire(
              'Xoá thành công',
              'Tệp của bạn đã bị xóa.',
              'success'
            )
          }
          else{
            swalWithBootstrapButtons.fire(
              'Xoá thất bại',
              'Tệp của bạn còn nguyên :)',
              'error'
            )
          }
        })        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Đã hủy',
          'Tệp của bạn đã an toàn :)',
          'error'
        )
      }
    });
   }
}
