import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public currentStudent: Student|null=new Student(0,"",0);
  // id:number=0;
  constructor(public ac:ActivatedRoute, public stdser:StudentService) { }
  
  
  
  ngOnInit(): void {

    // this.ac.paramMap.subscribe(params => {
    //   this.id = Number(params.get('id'));
    // });

    // this.stdser.getCurrentStudent(this.id).sub;

    this.ac.params.subscribe(a=>{
      console.log(a['id'])
      this.stdser.getCurrentStudent(a['id']).subscribe(d=>{
        console.log(d)
        this.currentStudent=d})
    })
  }

}
