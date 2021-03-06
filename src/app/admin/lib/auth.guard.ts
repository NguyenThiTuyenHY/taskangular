import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.userValue;
        if (user || localStorage.getItem("user")) {
            return true;
        } 
        // not logged in so redirect to login page with the return url
        this.router.navigateByUrl('admin/dangnhap', { queryParams: { returnUrl: state.url } });
        return false;
    }
}

// @Injectable({ providedIn: 'root' })
// export class RoleGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private authenticationService: AuthenticationService
//     ) { }

//     canActivate(route: ActivatedRouteSnapshot) {
//         const user = this.authenticationService.userValue;
//         if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
//             this.router.navigate(['/error']);
//             return false;
//         }     
//         return true;
//     }
// }