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
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.id = params["id"];
      this._route.params.subscribe(params=>{
        this._api.get_all("api/monan/get_mon_an_by_id/"+this.id).subscribe(res=>{
          this.item =res;
        })
      })
      setTimeout(()=>{
        this.loadScripts();
      });
    });  
  }
}
