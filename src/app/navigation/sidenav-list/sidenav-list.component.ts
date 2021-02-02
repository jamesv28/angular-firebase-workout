import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() closeSideNav = new EventEmitter<void>();
  authSubscription: Subscription;
  isAuth = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  closeSideNavToggle() {
    this.closeSideNav.emit();
  }


  onLogOut() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }


}
