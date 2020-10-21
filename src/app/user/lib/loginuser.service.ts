import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {user} from "../../model/user";
import {Router} from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';
@Injectable({
    providedIn:"root"
})
export class LoginUserService {
    private UserLogin : BehaviorSubject<user>;
    private user : Observable<user>;
    constructor(private http: HttpClient, private router: Router){
    }
    result:any;
    login(txtuser, txtpass){
    }
}