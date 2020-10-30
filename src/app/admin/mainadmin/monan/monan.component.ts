import { Component, OnInit, Injector} from '@angular/core';
import { baseadmincomponent } from '../../lib/base-component-admin';
import {FormGroup} from '@angular/forms';
import {MessageService} from 'primeng/api';
declare var CKEDITOR: any;
declare var $:any;
declare var document:any;
@Component({
  selector: 'app-monan',
  templateUrl: './monan.component.html',
  styleUrls: ['./monan.component.css'],
  providers: [MessageService]
})
export class MonanComponent extends baseadmincomponent implements OnInit {
  constructor(private injector: Injector, private messageService: MessageService) {
    super(injector)
  }
  first = 0;
  rows = 10;
  item: any;
  ckeditorContent: any;
  txttenmon:any;
  txtdonvi:any;
  txtdongia: any;
  display = false;
  uploadedFiles: any;
  monanform = FormGroup;
  tenmon:any;
  protocol:string;
  bophan:any;
  selectloai: any;
  ngOnInit(): void {
    this._route.params.subscribe(parmas=>{
      this._api.get_all("api/loaimon/get_all_loai_mon").subscribe(res=>{
        this.bophan = res;
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
    this.display = true;
    this.protocol="create";
  }
  showDialogedit(id){
    this.display = true;
    this.protocol="edit";
  }
  onUploadFile(event){
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    for(let file of event.files){
      var reader = new FileReader();
      reader.onload = function(e){
        console.log("hello");
        console.log(e.target.result);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      }
    }
    console.log(event.files)
    this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Tải ảnh thành công'});
  }
   luu(){
    console.log(this.txttenmon);
    console.log(this.txtdongia);
    console.log(this.txtdonvi);
    console.log(this.uploadedFiles);
    // console.log(CKEDITOR.instances.content.getData());
    console.log(this.ckeditorContent);
    if(this.protocol=="create"){
      var result = '';     
      let formdata ={
        tenmon:this.txttenmon,
        donvitinh:this.txtdonvi,
        gia:this.txtdongia,
        mota:this.ckeditorContent,
        hinhanh:this.getEncodeFromImage(this.uploadedFiles),
        idloai:this.selectloai
      }
      console.log(JSON.stringify(result));
      // this._api.create('/api/monan/Create_mon_an',formdata).subscribe(res=>{
      //   if(res==true){
      //     this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Thêm món ăn thành công'});
      //   }
      //   else{
      //     this.messageService.add({severity:'error', summary: 'Thất bại', detail: 'Thêm món ăn thất bại'});
      //   }
      // });
    }
    if(this.protocol=="edit"){
      this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Sửa món ăn thành công'});
    }
   }
}
