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
    // this.stds.push(std);
    return this.http.post<Student>(this.url,std);

  }
  getCurrentStudent(id:number){
    console.log(this.url+id)
    return this.http.get<Student>(this.url+id);

  }
  constructor(public http:HttpClient) { }
}
