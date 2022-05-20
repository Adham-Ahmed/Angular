import { Injectable } from '@angular/core';
import { Student } from './_models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url:string="http://localhost:8080/students/";
  stds:Student[] =[]
  getAllStudents(){
    return this.http.get<Student[]>(this.url);
  }

  addStudent(std:Student){
    this.stds.push(std);
  }
  getCurrentStudent(id:number){
    // for (let i = 0; i < this.stds.length; i++)
    // {
    //   if(this.stds[i]._id == id)
    //   {
    //     return this.stds[i];
    //   }
    // }
    // return null;
    console.log(this.url+id)
    return this.http.get<Student>(this.url+id);

  }
  constructor(public http:HttpClient) { }
}
