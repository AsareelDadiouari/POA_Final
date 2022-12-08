import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AddOrganizationComponent} from "./add-organization/add-organization.component";
import {CommonModule} from '@angular/common';
import {ListOrganizationComponent} from './list-organization/list-organization.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {MyDatepicker} from "../shared/datePicker/my-datepicker";
import {MyTable} from "../shared/table/my-table";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        NgbDatepicker,
        MyDatepicker,
        MyTable
    ],
  declarations: [
    AddOrganizationComponent,
    ListOrganizationComponent
  ],
  exports: [AddOrganizationComponent, ListOrganizationComponent],
  providers: []
})
export class OrganizationModule {
}
