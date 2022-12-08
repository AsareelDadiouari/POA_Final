import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Organization } from 'src/app/model/organization.interface';
import { OrganizationService } from 'src/app/service/organization.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {
  organizationFrom: FormGroup;
  creationDate: Date;

  constructor(private formBuilder: FormBuilder, private organizationService: OrganizationService) {
  }

  ngOnInit(): void {
    this.organizationFrom = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });
  }

  getDateOnSelect(date: Date){
    this.creationDate = date;
    console.log(this.creationDate);
  }

  onSubmit(event: Event): void {
    const organization = {
      name : this.organizationFrom.get("name").value,
      description : this.organizationFrom.get("description").value,
      creationDate: this.creationDate
    } as Organization

    this.organizationService.saveOrganization(organization).subscribe({
      next: (value) => {
        this.organizationFrom.markAsPristine();
        this.organizationFrom.markAsUntouched();
        this.organizationFrom.reset();
        console.log(value);
      },
      error: error => console.log(error)
    });
  }
}
