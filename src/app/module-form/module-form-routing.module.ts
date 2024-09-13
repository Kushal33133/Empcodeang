import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleFormComponent } from './module-form.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleFormComponent,
    children: [
      { path: '', redirectTo: 'newemloyeform', pathMatch: 'full' },
      { path: 'newemloyeform', loadChildren: () => import('./new-employe-form/new-employe-form.module').then(m => m.NewEmployeFormModule) },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleFormRoutingModule { }
