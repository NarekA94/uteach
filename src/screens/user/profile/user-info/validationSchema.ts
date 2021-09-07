import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const validationSchemaPassword = yup.object().shape({
  password: yup.string().required(),
  newPassword: yup.string().required().min(6, 'Առնվազն 6 նիշ'),
});
