import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  transaction_value: yup.number().integer().required(),
  reward: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
