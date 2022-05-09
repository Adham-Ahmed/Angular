import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentComponent
  ],
  exports: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class StudentModule { }
