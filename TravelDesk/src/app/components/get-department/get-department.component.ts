import { Component , NgModule, OnInit } from '@angular/core';
//import { DeptServiceService } from '../dept-service.service';
import { DeptServiceService } from 'src/app/dept-service.service';
//import { Department } from 'src/department';
import { Department } from 'src/department';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-department',
  templateUrl: './get-department.component.html',
  styleUrls: ['./get-department.component.css']
})
export class GetDepartmentComponent {
constructor(private_DeptService:DeptServiceService){}
}

getdepartments:[]=[];



