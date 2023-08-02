import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation: yup.string().required(),
  user_id: yup.string().nullable(),
  team_lead_id: yup.string().nullable(),
});
