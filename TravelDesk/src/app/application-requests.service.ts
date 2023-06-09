import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApplicationRequestsComponent } from './application-requests/application-requests.component';
import { ApplicationRequests } from 'src/ApplicationRequest';

@Injectable({
  providedIn: 'root'
})
export class ApplicationRequestsService {

  constructor(private _http : HttpClient) { }
 baseUrl ="http://localhost:5161/api/ApplicationRequests";
  GetApplicationRequests() 
  {
    return this._http.get<ApplicationRequestsComponent[]>(this.baseUrl);
}

AddRequest(req : ApplicationRequests)

   {

    console.log(req)

    console.log("Request Addded....")

     return this._http.post<ApplicationRequests>(this.baseUrl,

       JSON.stringify(req), {

         headers: new HttpHeaders({

           'Content-Type': 'application/json',

           'Accept': 'application/json'

         })

       }

     )}
}


