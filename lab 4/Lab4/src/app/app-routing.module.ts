import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"contactus",component: ContactusComponent},
  {path:"about",component: AboutComponent},
  {path:"",component: HomeComponent},
  {path:"department/add",component: DepartmentAddComponent},
  {path:"department",component: DepartmentListComponent,

    children: [
      {
        path:"details/:id",component: DepartmentDetailsComponent
      }
    ]
  },
  // {path:"department/details/:id",component: DepartmentDetailsComponent},
  
  // {path:"department/details",component: DepartmentAddComponent},
  // {path:"**",component: NotfoundComponent},
  // 
  {path:"student/add",component: StudentAddComponent},
  {path:"student",component: StudentListComponent,

    children: [
      {
        path:"details/:id",component: StudentDetailsComponent
      }
    ]
  },
  // {path:"student/details/:id",component: StudentDetailsComponent},
  
  {path:"**",component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
