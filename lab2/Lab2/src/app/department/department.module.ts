import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentComponent} from './department.component'
import { FormsModule } from '@angular/forms';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';

@NgModule({
  declarations: [
    DepartmentComponent,
    StringConvertPipe,
    ArraySplicePipe
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
