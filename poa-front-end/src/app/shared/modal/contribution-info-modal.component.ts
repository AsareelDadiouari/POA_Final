import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Organization } from 'src/app/model/organization.interface';

@Component({
  selector: 'my-modal',
  templateUrl: './contribution-info-modal.component.html',
  standalone: true,
})
export class ContributionInfoModal {
  @Input() organization: Organization;

  constructor(public activeModal: NgbActiveModal) {}

  globalSalary(): number {
    return this.organization.employees.reduce((acc, employee) => acc + employee.salary, 0);
  }

  totalContribution(): number {
    return this.globalSalary() * 0.18;
  }
}

