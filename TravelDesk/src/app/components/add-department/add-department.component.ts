import { Component , OnInit} from '@angular/core';
import { DeptServiceService } from 'src/app/dept-service.service';
import { Department } from 'src/department';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  /**
   *
   */
  constructor(private _DeptService :DeptServiceService,private formBuilder: FormBuilder) {
   
 
   
  }
  departmentForm!: FormGroup;
  ngOnInit(): void {
    this.buildForm();
  }
    private  buildForm(): void {

      this.departmentForm = this.formBuilder.group({
      departmentName: [null, Validators.required],
     });
  
    }

    department = new  Department();
    AddDepartment(): void {
    
      if (this.departmentForm.valid) {
        
     this.department.departmentId=0;
        this.department.departmentName = this.departmentForm.value;
        this.department.createdBy="aaa";
  
        console.log(this.department)
  
        this._DeptService.AddDepartment(this.department).subscribe(
  
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


     
