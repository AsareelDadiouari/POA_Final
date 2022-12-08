import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MyDatepicker} from "../shared/datePicker/my-datepicker";
import {MyTable} from "../shared/table/my-table";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MyDatepicker,
    MyTable
  ],
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent
  ],
  exports: [AddEmployeeComponent, ListEmployeeComponent],
  providers: []
})
export class EmployeeModule {
}

