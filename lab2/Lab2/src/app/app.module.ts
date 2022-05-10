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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import {PaginatorModule} from 'primeng/paginator';
import {AccordionModule} from 'primeng/accordion';
import {ProgressBarModule} from 'primeng/progressbar';
import { ProductsComponent } from './products/products/products.component';
import { ProductsModuleModule } from './products-module/products-module.module';



// import {}
@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    StudentModule,
    DepartmentModule,
    PasswordModule,
    RatingModule,
    FormsModule,
    SliderModule,
    PaginatorModule,
    AccordionModule,
    ProgressBarModule,
    ProductsModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
