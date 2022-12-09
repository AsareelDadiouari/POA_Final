import {Organization} from "../model/organization.interface";
import {Employee} from "../model/employee.interface";
import {Accountancy} from "../model/accountancy.interface";

export type DataPageGenericType<T extends Organization | Employee | Accountancy> =
  T extends Organization ? Organization
    : T extends Employee ? Employee
      : T extends Accountancy ? Accountancy
        : unknown;
