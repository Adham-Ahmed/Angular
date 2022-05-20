import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  nstd:Student=new Student(0,"",0);
  
  public save()
  {
    this.stdser.addStudent(this.nstd).subscribe()
    this.router.navigateByUrl('student');
  }

  constructor(public stdser:StudentService,public router:Router) {

   }
  //  public save()
  // {
  //   console.log("save pressed")
  //   // this.stdser.addStudent(this.nstd);
  //   this.router.navigateByUrl("/student/list");
     
  // }

  ngOnInit(): void {
  }

}
