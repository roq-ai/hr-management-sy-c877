import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeDataInterface {
  id?: string;
  name: string;
  birthdate: any;
  tax_information: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EmployeeDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  tax_information?: string;
  user_id?: string;
}
