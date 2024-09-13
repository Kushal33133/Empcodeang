import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonService } from './framework/common.service';
import { HttpModule } from '@angular/http';
import {ExcelServiceService}from '../app/framework/excel-service.service';
import { FileUploadService } from './services/fileupload/file-upload.service';
import { HttpClientModule } from '@angular/common/http';
import { ModuleFormComponent } from '../app/module-form/module-form.component';
import {MatStepperModule} from '@angular/material/stepper';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    ModuleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatStepperModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [CommonService,ExcelServiceService,FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
