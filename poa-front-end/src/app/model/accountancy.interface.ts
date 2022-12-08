import {Organization} from "./organization.interface";

export interface Accountancy {
  id?: number,
  organization: Organization,
  numberEmployees: number,
  globalSalary: number,
  totalContributions: number
  payedAmount: number
}
