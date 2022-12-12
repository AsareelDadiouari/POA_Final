import {Organization} from "./organization.interface";

export interface Accountancy {
  id?: number,
  organization?: Organization,
  numberOfEmployees?: number,
  globalSalary?: number,
  totalContribution?: number
  payedAmounts?: number[]
}
