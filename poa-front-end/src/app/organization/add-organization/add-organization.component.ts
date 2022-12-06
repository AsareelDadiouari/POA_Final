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

  constructor(private formBuilder: FormBuilder, private organizationService: OrganizationService) {
  }

  ngOnInit(): void {
    this.organizationFrom = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(event: Event): void {
    this.organizationService.saveOrganization({name : this.organizationFrom.get("name").value} as Organization).subscribe({
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
