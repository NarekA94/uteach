import React, {FC} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Avatar, FormikInput, H3, Button} from '../../../../components';
import {Colors} from '../../../../styles';
import {useFormik} from 'formik';
import {validationSchema} from './validationSchema';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {UserStackParamList} from '../../../../navigation/user/user';
import {ChangePassword} from './change-password';
type Props = NativeStackScreenProps<UserStackParamList>;

export const UserInfo: FC<Props> = () => {
  const formik = useFormik({
    initialValues: {
      first_name: 'awdawdawd',
      last_name: '123123123',
      email: 'akwdjhajwd@jkjba.adjnw',
    },
    validationSchema: validationSchema,
    onSubmit: formValues => {
      console.log(formValues);
    },
  });
  const {values, handleSubmit, errors, touched} = formik;

  return (
    <View style={styles.root}>
      <View style={styles.box}>
        <View style={styles.avatarBox}>
          <View style={styles.image}>
            <Avatar />
            <H3 style={styles.h3}>Տիգրան Գրիգորյան</H3>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.items}>
          <FormikInput
            errors={errors}
            value={values.first_name}
            touched={touched}
            handleChange={formik.handleChange}
            placeholder="Անուն *"
            name="first_name"
          />
          <FormikInput
            errors={errors}
            value={values.last_name}
            touched={touched}
            handleChange={formik.handleChange}
            placeholder="Ազգանուն *"
            name="last_name"
          />
          <FormikInput
            errors={errors}
            value={values.email}
            touched={touched}
            handleChange={formik.handleChange}
            placeholder="Էլ․ հասցե *"
            name="email"
          />
          <Button width="60%" body="Խմբագրել" onPress={handleSubmit} />
        </View>
        <ChangePassword />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  avatarBox: {
    alignItems: 'center',
    backgroundColor: Colors.default,
    height: 70,
  },
  image: {bottom: -10, alignItems: 'center'},
  h3: {
    fontWeight: 'bold',
  },
  items: {
    paddingHorizontal: 33,
  },
  box: {height: 180},
});
