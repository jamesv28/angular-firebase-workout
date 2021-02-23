import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanLoad, Route} from "@angular/router";

@Injectable()
export class AuthGuard  implements CanActivate, CanLoad{
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         if(this.authService.isAuth()) {
             return true
         } else {
             this.router.navigate(["/login"]);
         };
    }

    canLoad(router: Route) {
        if(this.authService.isAuth()) {
            return true
        } else {
            this.router.navigate(["/login"]);
        };
   }

/**
 *  This class is created for the sole purpose of protecting routes from veing viewed
 * i If a user doesn't have access from not siging/logging in then they will be redirected
 * */}