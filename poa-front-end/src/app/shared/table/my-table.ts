import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DecimalPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import {DataPageGenericType} from "../../custom-type/list-type.generics";
import {Employee} from 'src/app/model/employee.interface';
import {Organization} from "../../model/organization.interface";
import {Accountancy} from "../../model/accountancy.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'my-table',
  standalone: true,
  imports: [NgFor, DecimalPipe, NgIf, NgForOf],
  templateUrl: './my-table.html',
})
export class MyTable<T extends Organization | Employee | Accountancy> implements OnChanges, OnInit {
  @Input() data: DataPageGenericType<T>[];
  @Output() contributionClicked: EventEmitter<{state: boolean, organization: Organization}> = new EventEmitter<{state: boolean; organization: Organization}>();
  //@Output() totalPayedA
  pageInContribution: boolean = false;
  type: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.pageInContribution = this.router.url === "/contribution";
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue as T[] && this.data.length > 0) {
      if ((this.data[0] as Employee).lastname !== undefined) {
        this.type = 'Employee';
      } else if ((this.data[0] as Organization).creationDate !== undefined) {
        this.type = 'Organization';
      } else if ((this.data[0] as Accountancy).numberOfEmployees !== undefined)
        this.type = 'Accountancy';
      console.log(this.data)
    }
  }

  onContributionClick(organization: Organization) {
    this.contributionClicked.emit({state: true, organization});
  }

  totalPayedAmounts(index: number): number{
    return (this.data as Accountancy[])[index].payedAmounts.reduce((acc,amount) => acc + amount, 0);
  }
}
