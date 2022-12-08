import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {AddOrganizationComponent} from "./organization/add-organization/add-organization.component";
import {AddEmployeeComponent} from "./employee/add-employee/add-employee.component";
import {ListOrganizationComponent} from "./organization/list-organization/list-organization.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'add-organization',
    component: AddOrganizationComponent,
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
  },
  {
    path: 'organizations',
    component: ListOrganizationComponent,
  },
  {
    path: 'employees',
    component: ListEmployeeComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
