import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent
  ],
  exports: [AddEmployeeComponent, ListEmployeeComponent],
  providers: []
})
export class EmployeeModule {}

