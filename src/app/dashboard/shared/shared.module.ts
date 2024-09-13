import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicTableComponent} from './dynamic-table/dynamic-table.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule

  ],
  exports:[DynamicTableComponent]
})
export class SharedModule { }
