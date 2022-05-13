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
  id:number=0;
  constructor(public ac:ActivatedRoute, public stdser:StudentService) { }
  
  
  
  ngOnInit(): void {
    // this.id=this.ac.snapshot.params['id'];
    // this.id=Number(this.ac.snapshot.paramMap.get('id'));
    
    // this.id = this.ac.snapshot.paramMap.get('id');

    this.ac.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      // console.log("params:"+params)
      // console.log("id:"+this.id)
    });

    this.currentStudent=this.stdser.getCurrentStudent(this.id);
    // this.currentStudent=this.deptser.showDetails() 
    // insert student that has been pressed on from student list "details " button"
  }

}
