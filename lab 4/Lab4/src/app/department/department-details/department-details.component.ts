import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  public currentDepartment: Department|null=new Department(0,"","");
  // id=0;
  constructor(public ac:ActivatedRoute, public deptser:DepartmentService) { }
  
  
  
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      console.log(a['id'])
      this.deptser.getCurrentDepartment(a['id']).subscribe(d=>{this.currentDepartment=d})//d=>{this.dept=d}
    })
  }

}
