import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { baseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent extends baseComponent implements OnInit {

  constructor(private injector:Injector, private http: HttpClient, private router: Router, private activa: ActivatedRoute) { 
    super(injector)
  }

  ngOnInit(): void {
  }
  result:any;
  loginuser(txtemail,txtpass){
    this.http.get("https://localhost:44327/api/user/get_user?txtemail="+txtemail+"&&txtpass="+txtpass).subscribe(res=>{
          this.result = res;
            if(this.result != null){
                let local_host = localStorage.getItem("userlogin");
                var url = localStorage.getItem("url");
                if(local_host == null){                   
                    local_host = JSON.stringify(this.result);
                    localStorage.setItem("userlogin",local_host);
                    
                    this.router.navigate([url]);
                }
                else{
                    this.router.navigate([url]);
                    // this.router.navigate(["/trangchu"]);
                }
            }
            else{
              alert("Đăng nhập thất bại, Kiểm tra lại email hoặc mật khẩu của bạn");
            }           
        });
  }
}
