import { from } from 'rxjs';
import {Component, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class CartService{
    private itemsSubjet = new BehaviorSubject<any[]>([]);
    items = this.itemsSubjet.asObservable();
    constructor(){
        let local_storage = JSON.parse(localStorage.getItem('cart'));
        if(!local_storage){
            local_storage = [];
        }
        this.itemsSubjet.next(local_storage);
    }
}