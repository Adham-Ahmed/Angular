import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stdId: Number;
  stdName: string;
  stdAge: Number;
  stdDeptNo: Number;

  constructor() { 
    this.stdId =0;
    this.stdName = "no Name yet"
    this.stdAge = 0;
    this.stdDeptNo = 0;
  }

  ngOnInit(): void {
  }

}
