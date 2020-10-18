import{BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
    providedIn: 'root',
})
export class SearchService{
    private itemsSeach = new BehaviorSubject<any>([]);
    items = this.itemsSeach.asObservable();
    value:searchvalue;
    constructor(private _rou:Router){}
    ngOnInit():void{
        this.value.search = null;
        this.value.idloai = 0;
    }
    
    addsearch(txtsearch, idloai){
        alert("vo r");
        this.value.search = null;
        this.value.idloai = 0;
        this.itemsSeach.next(this.value);
        this._rou.navigate(["/timkiem"]);
    }
}
interface searchvalue{
    search:string;
    idloai: number;
}