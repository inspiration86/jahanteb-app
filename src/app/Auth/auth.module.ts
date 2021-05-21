import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginRegisterComponent} from './login-register/login-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from 'primeng/api';
import {NgOtpInputModule} from 'ng-otp-input';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SharedmoduleModule} from '../SharedModule/sharedmodule.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOtpInputModule,
    ButtonModule,
    FormsModule,
    SharedmoduleModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AuthModule { }
