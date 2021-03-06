import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
// import {stringConvert} from 'src/app/string-convert.pipe'
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dpt:Department[]= [
  ]
  // names:string[] =dpt.names
 names:string[]=['adham','yasser','mahmoud','ahmed']

  ndpt:Department=new Department(0,"","")
  idToEdit:number = 0

  ngOnInit(): void {
  }
  add()
  {
    this.dpt.push(new Department(this.ndpt.dptId,this.ndpt.dptName,this.ndpt.dptLocation))
    this.ndpt.dptId=0
    this.ndpt.dptName=""
    this.ndpt.dptLocation=""
  }
  delete(id:number)
  {
    let indexTodelete=0;
    for (let i = 0; i < this.dpt.length; i++) {
      const currDpt = this.dpt[i];
      if(currDpt.dptId==id) {
        indexTodelete=i;
      }
      
    }
    this.dpt.splice(indexTodelete,1)

  }
  edit(id:number)
  {
    let indexToEdit=0;
    for (let i = 0; i < this.dpt.length; i++) {
      const currDpt = this.dpt[i];
      if(currDpt.dptId==id) {
        indexToEdit=i;
      }
    }
    this.ndpt.dptId=this.dpt[indexToEdit].dptId
    this.ndpt.dptName=this.dpt[indexToEdit].dptName
    this.ndpt.dptLocation=this.dpt[indexToEdit].dptLocation
    this.idToEdit=indexToEdit;
  }
  confirmEdit()
  {
    let idToEdit=this.idToEdit
    this.dpt[idToEdit].dptId=this.ndpt.dptId
    this.dpt[idToEdit].dptName=this.ndpt.dptName
    this.dpt[idToEdit].dptLocation=this.ndpt.dptLocation
  }

}
