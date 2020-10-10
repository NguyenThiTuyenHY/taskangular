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
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.id = params["id"];
      setTimeout(()=>{
        this.loadScripts();
      });
      console.log(this.id);
    });    
  }
}
