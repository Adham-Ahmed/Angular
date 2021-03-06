import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {

  deptlst:Department[]=[];
  constructor(public deptser:DepartmentService,public router:Router) { }

  showAdd() {
      this.router.navigateByUrl("/department/add");
  }

  ngOnInit(): void {
    this.deptser.getAllDepartments().subscribe(data =>
     {
         this.deptlst = data;
     });
  }

}
