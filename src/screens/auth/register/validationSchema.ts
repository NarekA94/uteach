import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6, 'Առնվազն 6 նիշ'),
  repeatPassword: yup
    .string()
    .required()
    .test('passwords-match', 'no same password', function (value) {
      return this.parent.password === value;
    }),
});
