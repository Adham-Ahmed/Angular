import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private depts:Department[]=[
    new Department(100,"sd","Alex"),
    new Department(200,"os","Alex"),
    new Department(300,"ai","Alex"),
  ]

  getAllDepartments(){
    return this.depts;
  }

  addDepartment(dept:Department){
    this.depts.push(dept);
    // check line above minute(1:08:36)
  }

  getCurrentDepartment(id:number){
    for (let i = 0; i < this.depts.length; i++) {
      if(id == this.depts[i]._id)
      return this.depts[i];
    }
    return null;
  }
  // getDepartment(id:number){
  //   for (let i = 0; i < this.depts.length; i++)
  //   {
  //     if(this.depts[i]._id === id)
  //     {
  //       return this.depts[i];
  //     }
  //   }
  //   return null;
  // }
  constructor() { }
}
