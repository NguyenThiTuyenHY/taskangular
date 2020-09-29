import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  urls = [];
  changeFile(event){
    alert("hello");
    if(event.target.file){
      console.log("Hello");
      var a = new FileReader();
      for(let i = 0;i<File.length;i++){
        a.readAsDataURL(event.target.files[i]);
        a.onload = (event:any)=>{
          this.urls.push(event.target.result);
        }
      }
    }
  }
}
