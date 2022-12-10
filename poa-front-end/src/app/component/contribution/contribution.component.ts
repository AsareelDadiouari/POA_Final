import {Component, OnInit} from '@angular/core';
import { OrganizationService } from 'src/app/service/organization.service';
import {Organization} from "../../model/organization.interface";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContributionInfoModal} from "../../shared/modal/contribution-info-modal.component";

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit{
  organizations: Organization[];

  constructor(private organizationService: OrganizationService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.organizationService.getOrganizations().subscribe(organizations => {
      this.organizations = organizations;
    });
  }

  openModal(data: {state: boolean, organization: Organization}) {
    const modalRef = this.modalService.open(ContributionInfoModal, { centered: true });
    modalRef.componentInstance.organization = data.organization;
  }
}
