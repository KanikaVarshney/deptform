import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { HttpClientModule } from '@angular/common/http';
//import { LoginComponent } from './login/login.component';
import { CommentComponent } from './comment/comment.component';
import { ApplicationRequestsComponent } from './application-requests/application-requests.component';
//import { HotelComponent } from './hotel/hotel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { CreatedepartmentComponent } from './components/createdepartment/createdepartment.component';
//import { GetdepartmentComponent } from './components/getdepartment/getdepartment.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { GetDepartmentComponent } from './components/get-department/get-department.component';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    //LoginComponent,
    CommentComponent,
    ApplicationRequestsComponent,
    //CreatedepartmentComponent,
    //GetdepartmentComponent,
    AddDepartmentComponent,
    GetDepartmentComponent,
   // HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path:'listdepartment',component: DepartmentComponent},
        {path:'adddepartment',component: AddDepartmentComponent},
        
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
