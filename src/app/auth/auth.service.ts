import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from '../training/training.service';

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService
  ) {}

  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  registerUser(authData: AuthData) {
    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((res) => {
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelSubscription();
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  login(authData: AuthData) {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((res) => {

      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  logout() {
    this.afAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }

  
}
