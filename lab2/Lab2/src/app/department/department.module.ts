import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentComponent} from './department.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DepartmentComponent
  ]
  // declarations: [DepartmentComponent]

})
export class DepartmentModule { }
