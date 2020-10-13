import { Component, OnInit, Injector} from '@angular/core';
import { baseadmincomponent } from '../../lib/base-component-admin';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-monan',
  templateUrl: './monan.component.html',
  styleUrls: ['./monan.component.css']
})
export class MonanComponent extends baseadmincomponent implements OnInit {
  constructor(private injector: Injector, private _builder: FormBuilder) {
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
  uploadedFiles: any[] = [];
  monanform : FormGroup;
  ngOnInit(): void {
    // this._route.params.subscribe(parmas=>{
    //   this._api.get("")
    // })
    this.monanform = this._builder.group({

    })
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
  }
  onUpload(event){
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
   }
   monanSubmit(){
     
   }
}
