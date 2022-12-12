import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Employee} from "../model/employee.interface";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = environment.backend_url + "/employees";

  constructor(private http: HttpClient) {
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    console.log(employee)

    return this.http.post<Employee>(this.url, employee).pipe(
      map((employee) => {
        const found = employee.organization;
        found.employees = found.employees ?? [];
        found.employees.push({id: employee.id});

        return employee;
      }),
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url).pipe(
      map((employees) => employees.map((employee) =>{
        delete employee.organization.employees
        return employee;
      }))
    );
  }
}
