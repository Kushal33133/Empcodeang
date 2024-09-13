import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'newlogin', loadChildren: () => import('./newlogin/newlogin.module').then(m => m.NewloginModule) },

  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthService] },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'newemloyeform', loadChildren: () => import('./module-form/new-employe-form/new-employe-form.module').then(m => m.NewEmployeFormModule),canActivate: [AuthService] },
  { path: 'newemloyeform', loadChildren: () => import('./module-form/new-employe-form/new-employe-form.module').then(m => m.NewEmployeFormModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
