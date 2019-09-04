import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UserRoutesRoutes } from './services/user-routes.routing';

@NgModule({
  imports: [
    CommonModule,
    UserRoutesRoutes,
    FormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule { }
