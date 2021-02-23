import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {SharedModule} from '../utility/shared.module';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent
    ],
    imports: [ 
        ReactiveFormsModule,
        AngularFireAuthModule,
        SharedModule,
        AuthRoutingModule
    ], 
    exports: [],
    providers: []
})
export class AuthModule {}
