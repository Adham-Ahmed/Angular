import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';
// import {}
@NgModule({
  declarations: [
    AppComponent,
    // StudentComponent,
    // DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    // DepartmentComponent,
    StudentModule,
    DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
