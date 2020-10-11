import { Inject } from '@angular/compiler/src/core';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends baseComponent implements OnInit {

  constructor(private injector: Injector) {
    super(injector)
   }
  item: any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._api.get_all("api/loaimon/get_all_loai_mon").subscribe(res=>{
        this.item = res;
        console.log(this.item);
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })
  }

}
