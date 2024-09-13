import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from 'angular-datatables';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';


const MaterialComponents = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatTableModule,
  ReactiveFormsModule,
  FormsModule,
  MatDialogModule,
  DataTablesModule,
  MatDatepickerModule, MatSelectModule, MatNativeDateModule,
  MatStepperModule, MatInputModule, MatButtonModule, MatRadioModule, MatDividerModule, MatFormFieldModule
];
@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],

  exports: [
    MaterialComponents
  ]
})
export class SharedModule { }
