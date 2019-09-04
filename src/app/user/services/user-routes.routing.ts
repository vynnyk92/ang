import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {  path: 'profile', component: ProfileComponent },
  {  path: 'login', component: LoginComponent },
];

export const UserRoutesRoutes = RouterModule.forChild(routes);
