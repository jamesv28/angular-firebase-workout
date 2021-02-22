import { Subscription } from 'rxjs';
import { UIService } from './../../utility/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;

  constructor(
    private authService: AuthService,
    private uiService: UIService
    ) { }

  agree = "I agree to the terms & conditions";
  isLoading = false;
  isLoadingSubscription: Subscription;

  ngOnInit(): void {
    this.isLoadingSubscription = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18) 
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }

  ngOnDestroy(): void {
    if(this.isLoadingSubscription) this.isLoadingSubscription.unsubscribe();
  }
  
}
