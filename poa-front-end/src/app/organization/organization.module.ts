import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AddOrganizationComponent} from "./add-organization/add-organization.component";
import { CommonModule } from '@angular/common';
import { ListOrganizationComponent } from './list-organization/list-organization.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddOrganizationComponent,
    ListOrganizationComponent
  ],
  exports: [AddOrganizationComponent, ListOrganizationComponent],
  providers: []
})
export class OrganizationModule {}
