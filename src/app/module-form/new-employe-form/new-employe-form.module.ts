import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { NewEmployeFormRoutingModule } from './new-employe-form-routing.module';
import { NewEmployeFormComponent } from './new-employe-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module'
import { NgxSpinnerModule } from 'ngx-spinner';
import { CandidateScreeningFormComponent } from './candidate-screening-form/candidate-screening-form.component';
import { JoiningDashboardComponent } from './joining-dashboard/joining-dashboard.component';



@NgModule({
  declarations: [NewEmployeFormComponent,CandidateScreeningFormComponent, JoiningDashboardComponent],
  imports: [
    CommonModule,
    NewEmployeFormRoutingModule, SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [DatePipe]
})
export class NewEmployeFormModule { }
