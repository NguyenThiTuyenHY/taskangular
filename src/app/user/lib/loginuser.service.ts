import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {user} from "../../model/user";
@Injectable({
    providedIn:"root"
})
export class LoginUserService {
    private UserLogin : BehaviorSubject<user>;
    private user : Observable<user>;
    constructor(private http: HttpClient){

    }
    login(txtuser, txtpass){
        this.http.get("").subscribe(res=>{

        });
    }
}