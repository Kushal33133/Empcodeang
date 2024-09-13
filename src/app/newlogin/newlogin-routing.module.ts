import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewloginComponent } from './newlogin.component';

const routes: Routes = [{ path: '', component: NewloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewloginRoutingModule { }
