import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  // private depts:Department[]=[
  //   new Department(100,"sd","Alex"),
  //   new Department(200,"os","Alex"),
  //   new Department(300,"ai","Alex"),
  // ]
  depts:Department[] =[]
  private url:string="http://localhost:8080/departments/";
  getAllDepartments(){
    return this.http.get<Department[]>(this.url);
  }

  addDepartment(dept:Department){
    // this.depts.push(dept);
    return this.http.post<Department>(this.url,dept);
  }

  getCurrentDepartment(id:number){
    // for (let i = 0; i < this.depts.length; i++) {
    //   if(id == this.depts[i]._id)
    //   return this.depts[i];
    // }
    // return null;
    console.log(this.url+id)
    return this.http.get<Department>(this.url+id);

  }
  constructor(public http:HttpClient ) { }
}
