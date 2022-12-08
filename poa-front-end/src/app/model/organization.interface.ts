import {Employee} from "./employee.interface";

export interface Organization {
  id?: number,
  name: string,
  employees?: Array<Employee>
  description?: string
  creationDate?: Date
}
