import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DecimalPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import {DataPageGenericType} from "../../custom-type/list-type.generics";
import { Employee } from 'src/app/model/employee.interface';
import {Organization} from "../../model/organization.interface";
import {Accountancy} from "../../model/accountancy.interface";

@Component({
  selector: 'my-table',
  standalone: true,
  imports: [NgFor, DecimalPipe, NgIf, NgForOf],
  templateUrl: './my-table.html',
})
export class MyTable<T> implements OnChanges {
  @Input() data: DataPageGenericType<T>[];
  type: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue as T[]) {
      if ((this.data[0] as Employee).lastname !== undefined)
        this.type = 'Employee';
      else if ((this.data[0] as Organization).creationDate !== undefined)
        this.type = 'Organization';
      else if ((this.data[0] as Accountancy).numberEmployees !== undefined)
        this.type = 'Accountancy';
    }
  }
}
