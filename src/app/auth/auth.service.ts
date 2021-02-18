import { Inject, Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { AuthData } from './auth-data.model';
import {User} from './user.model';
import {Subject} from "rxjs/Subject";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable()
export class AuthService {

    constructor(private router: Router, private afAuth: AngularFireAuth) {}
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    registerUser(authData: AuthData) {
        this.afAuth.createUserWithEmailAndPassword(
          authData.email,
          authData.password
        ).then(res => {
          this.isAuthenticated = true;
          this.authSuccessfully();
        }).catch(err => {
          this.isAuthenticated = false;
          console.log('error', err);
        })
      }
    
      login(authData: AuthData) {
        this.afAuth.signInWithEmailAndPassword(
          authData.email,
          authData.password
        ).then(res => {
          console.log('result', res);
          this.authSuccessfully();
        }).catch(err => {
          console.log('error', err);
        })
      }
    
      logout() {
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
      }

    
      isAuth() {
        return this.isAuthenticated;
      }
    
      private authSuccessfully() {
        this.authChange.next(true);
        this.router.navigate(['/training']);
      }
}