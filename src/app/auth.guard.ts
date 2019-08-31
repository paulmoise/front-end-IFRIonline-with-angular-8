import {Injectable} from '@angular/core';
import {Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements AuthGuard{

    constructor(private router:Router){}

    canActivated(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){

        if(localStorage.getItem('currentUser')){
            return false;
        }
        this.router.navigate(['/login']);
        return true;
    }

}