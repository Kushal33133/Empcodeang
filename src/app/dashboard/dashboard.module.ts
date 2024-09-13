import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UploadComponent } from './upload/upload.component';
import { UpdateDocketComponent } from './update-docket/update-docket.component';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, MainComponent, UploadComponent, UpdateDocketComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  providers: [
    DatePipe,
    CurrencyPipe
  ]
})
export class DashboardModule { }
