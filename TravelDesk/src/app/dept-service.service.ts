import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DepartmentComponent } from './department/department.component';
import { Department } from 'src/department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {

  constructor(private _http : HttpClient) { }
 baseUrl ="http://localhost:5161/api/Departments";
  GetDepartments()  : Observable<Department[]>
  {
    return this._http.get<Department[]>(this.baseUrl);
  }

  AddDepartment(req : Department)

   {

    console.log("in ser  " + JSON.stringify(req))

    console.log("Request Addded....")


     return this._http.post<Department>(this.baseUrl,

       JSON.stringify(req), {

         headers: new HttpHeaders({

           'Content-Type': 'application/json',

           'Accept': 'application/json'

         })

       }

     )}
}
