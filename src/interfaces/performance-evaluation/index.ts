import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  evaluation: string;
  user_id?: string;
  team_lead_id?: string;
  created_at?: any;
  updated_at?: any;

  user_performance_evaluation_user_idTouser?: UserInterface;
  user_performance_evaluation_team_lead_idTouser?: UserInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  evaluation?: string;
  user_id?: string;
  team_lead_id?: string;
}
