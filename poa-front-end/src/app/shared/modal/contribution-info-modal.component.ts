import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Organization } from 'src/app/model/organization.interface';
import {Router} from "@angular/router";
import {OrganizationService} from "../../service/organization.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {AccountancyService} from "../../service/accountancy.service";
import { Accountancy } from 'src/app/model/accountancy.interface';

@Component({
  selector: 'my-modal',
  templateUrl: './contribution-info-modal.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf,
    NgIf
  ]
})
export class ContributionInfoModal implements OnInit {
  @Input() organization: Organization;
  organizations!: Array<Organization>;
  showOrganizationList: boolean;
  selectedOrganization: FormControl<Organization> = new FormControl();
  payedAmount: FormControl<number> = new FormControl();

  constructor(public activeModal: NgbActiveModal,
              private router: Router,
              private organizationService: OrganizationService,
              private accountancyService:AccountancyService) {}

  async ngOnInit() {
    this.showOrganizationList = this.router.url.includes("accountancy");

    if (this.showOrganizationList) {
      this.selectedOrganization.valueChanges.subscribe((data) => {
        this.organization = data;
      });

      this.organizationService.getOrganizations().subscribe((organizations) => {
        this.organizations = organizations;
        this.selectedOrganization.setValue(this.organizations[0]);
      });
    }
  }

  globalSalary(): number {
    return this.organization?.employees.reduce((acc, employee) => acc + (employee.salary)/12, 0);
  }

  totalContribution(): number {
    return this.globalSalary() * 0.18;
  }

  onPayContribution($event: MouseEvent) {
    $event.preventDefault();
    this.accountancyService.getAccountancyByOrganizationName(this.organization.name).subscribe({
      next: (accountancy) => {
        const nextPayment = Number(this.payedAmount.getRawValue()) + accountancy.payedAmounts.reduce((acc, amount) => acc + amount, 0);

        if (nextPayment <= this.totalContribution()){
          accountancy.payedAmounts.push(this.payedAmount.getRawValue());
          accountancy.totalContribution = this.totalContribution();
          this.accountancyService.saveAccountancy(accountancy).subscribe(acc => {
            console.log(acc);
          })
        } else {
          alert("La somme a verser est supérieur au reste a payer");
        }
      },
      error: async (error) => {
        const newAccountancy = {} as Accountancy;
        newAccountancy.organization = this.organization;
        newAccountancy.numberOfEmployees = newAccountancy.organization.employees.length;
        newAccountancy.globalSalary = this.globalSalary();
        newAccountancy.totalContribution = newAccountancy.globalSalary * 0.18;
        newAccountancy.payedAmounts = [];
        newAccountancy.payedAmounts.push(this.payedAmount.getRawValue());
        this.accountancyService.saveAccountancy(newAccountancy).subscribe(saved => {
          console.log(saved);
        })
      },
      complete: () => {
        this.payedAmount.reset();
      },
    });
  }
}

