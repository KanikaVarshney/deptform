import { Component , NgModule, OnInit } from '@angular/core';
import { ApplicationRequestsService } from '../application-requests.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-application-requests',
  templateUrl: './application-requests.component.html',
  styleUrls: ['./application-requests.component.css']
})
export class ApplicationRequestsComponent {
  constructor(private _ApplicationRequestsService :ApplicationRequestsService,private formBuilder: FormBuilder) {
   
 
   
  }
  applicationrequests : ApplicationRequestsComponent[]=[];
  applicationrequestForm!: FormGroup;
  ngOnInit(): void {
    this.buildForm();
     this._ApplicationRequestsService.GetApplicationRequests().subscribe(res=>
       {
       console.log(res)
       this. applicationrequests= res;
       console.log(this. applicationrequests)
     });
    }
    private  buildForm(): void {

      this.applicationrequestForm = this.formBuilder.group({
  
        
  
      departmentName: [null, Validators.required],
  
      location:[null, Validators.required],
      reasonForTravelling:[null, Validators.required],
      departureCity:[null, Validators.required],
      destinationCity:[null, Validators.required],
      departureDate:[null, Validators.required],
      durationOfTravel:[null, Validators.required],
      hotelRequired:[null, Validators.required],
      mealNeeded:[null, Validators.required],
      travelMode:[null, Validators.required],
      userId:[null, Validators.required],
      documentId:[null, Validators.required],
      hotelId:[null, Validators.required],
      departmentId:[null, Validators.required],
  
        
  
      });
  
    }
    AddRequest(): void {

      if (this.applicationrequestForm.valid) {
  
        const formData = this.applicationrequestForm.value;
  
        console.log(formData)
  
        this._ApplicationRequestsService.AddRequest(formData).subscribe(
  
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
