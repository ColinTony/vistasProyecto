import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule
  ]
})
export class LoginModule { }
