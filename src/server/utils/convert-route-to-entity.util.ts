const mapping: Record<string, string> = {
  'employee-data': 'employee_data',
  organizations: 'organization',
  payrolls: 'payroll',
  'performance-evaluations': 'performance_evaluation',
  'time-trackings': 'time_tracking',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
