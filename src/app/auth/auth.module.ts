import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {SharedModule} from '../utility/shared.module';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent
    ],
    imports: [ 
        ReactiveFormsModule,
        AngularFireAuthModule,
        SharedModule

    ], 
    exports: [],
    providers: []
})
export class AuthModule {}
