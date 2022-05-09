import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dpt:Department = new Department(1,"software department","alexandria");

  ngOnInit(): void {
  }

}
