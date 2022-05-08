import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAComponent } from './header-a/header-a.component';
import { TopComponent } from './top/top.component';
// import 'bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    StudentComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HeaderAComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
