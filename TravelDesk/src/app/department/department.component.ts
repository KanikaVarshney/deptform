import { Component , NgModule, OnInit } from '@angular/core';
import { DeptServiceService } from '../dept-service.service';
import { Department } from 'src/department';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  /**
   *
   */
  constructor(private _DeptService :DeptServiceService,private formBuilder: FormBuilder) {
   
 
   
  }
  departments : Department[]=[];
  departmentForm!: FormGroup;
  ngOnInit(): void {
    this.buildForm();
     this._DeptService.GetDepartments().subscribe(res=>
       {
       console.log(res)
      this.departments= res;
      console.log(this.departments.length)
      //  console.log(this.departments)
     });
  }
    private  buildForm(): void {

      this.departmentForm = this.formBuilder.group({
  
        
  
      departmentName: [null, Validators.required],
  
        CreatedBy: [null, Validators.required],
  
        
  
      });
  
    }
    AddDepartment(): void {

      if (this.departmentForm.valid) {
  
        const formData = this.departmentForm.value;
  
        console.log(formData)
  
        this._DeptService.AddDepartment(formData).subscribe(
  
          (response) => {
  
            console.log(response); // Handle the success response from the API
  
          },
  
          (error) => {
  
            console.error(error); // Handle the error response from the API
  
          }
  
        );
  
      }
  
    }
  }


     
