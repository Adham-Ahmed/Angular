import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private stds:Student[]=[
    new Student(100,"Adham",3.5),
    new Student(200,"Ahmed",2.9),
    new Student(300,"Mohamed",3.2),
  ]

  getAllStudents(){
    return this.stds;
  }

  addStudent(dept:Student){
    this.stds.push(dept);
    // check line above minute(1:08:36)
  }
  getStudent(id:number){
    for (let i = 0; i < this.stds.length; i++)
    {
      if(this.stds[i]._id === id)
      {
        return this.stds[i];
      }
    }
    return null;
  }
  constructor() { }
}
