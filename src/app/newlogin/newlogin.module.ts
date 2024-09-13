import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewloginRoutingModule } from './newlogin-routing.module';
import { NewloginComponent } from './newlogin.component';


@NgModule({
  declarations: [NewloginComponent],
  imports: [
    CommonModule,
    NewloginRoutingModule
  ]
})
export class NewloginModule { }
