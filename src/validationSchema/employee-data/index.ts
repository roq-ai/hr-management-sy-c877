import * as yup from 'yup';

export const employeeDataValidationSchema = yup.object().shape({
  name: yup.string().required(),
  birthdate: yup.date().required(),
  tax_information: yup.string().required(),
  user_id: yup.string().nullable(),
});
