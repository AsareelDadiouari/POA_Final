import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {AddOrganizationComponent} from "./component/organization/add-organization/add-organization.component";
import {AddEmployeeComponent} from "./component/employee/add-employee/add-employee.component";
import {ListOrganizationComponent} from "./component/organization/list-organization/list-organization.component";
import {ListEmployeeComponent} from "./component/employee/list-employee/list-employee.component";
import {ContributionComponent} from "./component/contribution/contribution.component";
import {AccountancyComponent} from "./component/accountancy/accountancy.component";

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
    path: 'contribution',
    component: ContributionComponent,
  },
  {
    path: 'accountancy',
    component: AccountancyComponent,
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
