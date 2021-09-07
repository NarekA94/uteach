import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {FormikInput, Button, H3} from '../../../../components';
import {useFormik} from 'formik';
import {validationSchema} from './validationSchema';

export const ChangePassword: FC = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword: '123123123',
    },
    validationSchema: validationSchema,
    onSubmit: formValues => {
      console.log(formValues);
    },
  });
  const {values, handleSubmit, errors, touched} = formik;

  return (
    <View style={styles.root}>
      <H3 style={styles.h3}>Փոխել գաղտնաբառը</H3>
      <View style={styles.items}>
        <FormikInput
          eye={true}
          secureTextEntry={true}
          errors={errors}
          value={values.password}
          touched={touched}
          handleChange={formik.handleChange}
          placeholder="Գաղտնաբառ*"
          name="password"
        />
        <FormikInput
          eye={true}
          secureTextEntry={true}
          errors={errors}
          value={values.newPassword}
          touched={touched}
          handleChange={formik.handleChange}
          placeholder="Գաղտնաբառ*"
          name="password"
        />
        <Button width="60%" body="Պահպանել" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  items: {
    paddingHorizontal: 33,
  },
  h3: {
    textAlign: 'center',
    marginVertical: 20,
  },
});
