import { Inject, Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { AuthData } from './auth-data.model';
import {User} from './user.model';
import {Subject} from "rxjs/Subject";

@Injectable()
export class AuthService {

    constructor(private router: Router) {}
    authChange = new Subject<boolean>();
    private user: User;

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: String(Math.round(Math.random() * 10000))
        }
        this.authSuccess();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: String(Math.round(Math.random() * 10000))
        }
        this.authSuccess(); 
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(["/login"]);
    }

    getUser() {
        return {...this.user};
    }

    isAuth() {
        return this.user !== this.user;
    }

    private authSuccess() {
        this.authChange.next(true);
        this.router.navigate(["/training"]);
    }
}