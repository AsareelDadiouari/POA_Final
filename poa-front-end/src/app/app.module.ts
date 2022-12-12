import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbActiveModal, NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import {OrganizationModule} from "./component/organization/organization.module";
import {EmployeeModule} from "./component/employee/employee.module";
import {SharedModule} from './shared/shared.module';
import {AccountancyComponent} from './component/accountancy/accountancy.component';
import {ContributionComponent} from './component/contribution/contribution.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AccountancyComponent,
    ContributionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganizationModule,
    EmployeeModule,
    SharedModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
