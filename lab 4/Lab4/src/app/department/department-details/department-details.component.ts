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
  id=0;
  constructor(public ac:ActivatedRoute, public deptser:DepartmentService) { }
  
  
  
  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.currentDepartment=this.deptser.getCurrentDepartment(this.id);
    // this.currentDepartment=this.deptser.showDetails() 
    // insert department that has been pressed on from department list "details " button"
  }

}
