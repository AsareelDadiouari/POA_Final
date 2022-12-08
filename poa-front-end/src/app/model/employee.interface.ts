import { Organization } from "./organization.interface"

export interface Employee {
  id?: number,
  firstname?: string,
  lastname?: string
  organization?: Organization
  salary?: number,
  employmentDate?: Date
}
