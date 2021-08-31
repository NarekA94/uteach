import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
