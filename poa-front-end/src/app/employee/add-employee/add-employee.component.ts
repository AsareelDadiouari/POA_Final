import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OrganizationService} from "../../service/organization.service";
import {Organization} from "../../model/organization.interface";
import {Employee} from "../../model/employee.interface";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  organizations: Array<Organization>;
  selectedOrganization: Organization;
  employmentDate: Date;

  constructor(private formBuilder: FormBuilder,
              private organizationService: OrganizationService,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      lastname: new FormControl("", [Validators.required]),
      firstname: new FormControl("", [Validators.required]),
      selectedOrganizationStr: new FormControl("", [Validators.required]),
      salary: new FormControl("", [Validators.required]),
    });

    this.organizationService.getOrganizations().subscribe((orgs) => {
      this.organizations = orgs.filter(org => org.name !== "");
      this.employeeForm.controls['selectedOrganizationStr'].setValue(this.organizations[0], {onlySelf: true});
    })

    this.employeeForm.controls['selectedOrganizationStr'].valueChanges.subscribe((value) => {
      this.selectedOrganization = value;
      console.log(this.selectedOrganization)
    })
  }

  getDateOnSelect(date: Date) {
    this.employmentDate = date;
  }
  onSubmit($event: MouseEvent) {
    const employee = {
      firstname: this.employeeForm.get('firstname').value,
      lastname: this.employeeForm.get('lastname').value,
      organization: this.employeeForm.get('selectedOrganizationStr').value as Organization,
      salary: this.employeeForm.get('salary').value,
      employmentDate : this.employmentDate
    } as Employee;

    this.employeeService.saveEmployee(employee).subscribe({
      next: (employee) => {
        this.employeeForm.markAsPristine();
        this.employeeForm.markAsUntouched();
        this.employeeForm.reset();
        console.log(employee);
      },
      error: error => console.log(error)
    })
  }


}
