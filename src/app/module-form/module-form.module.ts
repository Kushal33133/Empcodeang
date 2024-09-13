import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFormRoutingModule } from './module-form-routing.module';
import { ModuleFormComponent } from './module-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ModuleFormComponent],
  imports: [
    CommonModule,
    ModuleFormRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,MatButtonModule,MatIconModule,MatTabsModule,BrowserAnimationsModule,FormBuilder
  ]
})
export class ModuleFormModule { }
