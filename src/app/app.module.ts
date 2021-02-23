import { AuthGuard } from './auth/auth.guard';
import { UIService } from './utility/ui.service';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from "@angular/flex-layout";
import {TrainingService} from "./training/training.service";
import {WorkoutsService} from "./workouts/workouts.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {AuthModule} from './auth/auth.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { environment } from '../environments/environment';
import { WorkoutsComponent } from './workouts/workouts.component';
import { SingleWorkoutComponent } from './workouts/single-workout/single-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    WorkoutsComponent,
    SingleWorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService,TrainingService, WorkoutsService,AuthGuard, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
