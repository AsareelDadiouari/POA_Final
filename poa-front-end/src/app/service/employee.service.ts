import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Organization} from '../model/organization.interface';
import {Observable} from 'rxjs';
import {Employee} from "../model/employee.interface";
import {map, switchMap} from "rxjs/operators";
import {OrganizationService} from "./organization.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = environment.backend_url + "/employees";
  organizationUrl = environment.backend_url + "/organizations"

  constructor(private http: HttpClient, private organizationService: OrganizationService) {
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    console.log(employee)

    return this.http.post<Employee>(this.url, employee).pipe(
      switchMap((employee) => {
        const found = employee.organization;
        found.employees = found.employees ?? [];
        found.employees.push({id: employee.id});

        return this.organizationService.saveOrganization(found).pipe(
          map((organization: Organization) => {
            console.log(organization)
            return employee;
          })
        ) as Observable<Organization>;
      }),
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
