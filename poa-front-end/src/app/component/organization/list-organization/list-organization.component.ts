import {Component, OnInit} from '@angular/core';
import {Organization} from 'src/app/model/organization.interface';
import {OrganizationService} from 'src/app/service/organization.service';

@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.css']
})
export class ListOrganizationComponent implements OnInit {
  organizations: Organization[];

  constructor(private organizationService: OrganizationService) {
  }


  ngOnInit(): void {
    this.organizationService.getOrganizations().subscribe(organizations => {
      this.organizations = organizations;
    })
  }

}
