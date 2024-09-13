import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEmployeFormComponent } from './new-employe-form.component';
import { CandidateScreeningFormComponent } from './candidate-screening-form/candidate-screening-form.component';
import { JoiningDashboardComponent } from './joining-dashboard/joining-dashboard.component';


const routes: Routes = [
  { path: 'empdocupload', component: NewEmployeFormComponent },
  { path: 'screening', component: CandidateScreeningFormComponent },
  { path: 'joindash', component: JoiningDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewEmployeFormRoutingModule { }
