import React, {FC, useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FormikInput,
  Button,
  AlreadyRegisterd,
  SvgXml,
  H1,
} from '../../../components';
import {useFormik} from 'formik';
import {validationSchema} from './validationSchema';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthContext} from '../../../context';
import type {AuthStackParamList} from '../../../navigation/auth/auth';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

export const Register: FC<Props> = ({navigation}) => {
  const authUserData = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: formValues => {
      authUserData.setUserData(formValues);
    },
  });
  const {values, handleSubmit, errors, touched} = formik;
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.logo}>
        <H1 style={styles.heading}>Գրանցվել</H1>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.form}>
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
          <FormikInput
            eye={true}
            secureTextEntry={true}
            errors={errors}
            value={values.password}
            touched={touched}
            handleChange={formik.handleChange}
            placeholder="Գաղտնաբառ *"
            name="password"
          />
        </View>
        <View style={styles.buttonBox}>
          <Button body="Գրանցվել" onPress={handleSubmit} />
        </View>
        <View style={styles.svgBox}>
          <SvgXml xml="orXml" />
        </View>
        <Button
          width="75%"
          continerStyle={styles.socialMediaGoogle}
          onPress={() => {}}>
          <SvgXml xml="googleXml" />
        </Button>
        <Button
          width="75%"
          continerStyle={styles.socialMediaFacebook}
          onPress={() => {}}>
          <SvgXml xml="facebookXml" />
        </Button>
        <AlreadyRegisterd
          continerStyle={styles.sign}
          firstWord="Ես գրանցված եմ։"
          secondWord="Մուտք"
          onPress={() => navigation.navigate('SignIn')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 10,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  heading: {marginTop: 20, marginBottom: 20},
  scroll: {
    alignItems: 'center',
  },
  form: {
    width: '100%',
    paddingHorizontal: 30,
  },
  buttonBox: {
    width: '60%',
    marginTop: 15,
  },
  info: {
    marginVertical: 10,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 13,
  },
  forgot: {
    marginVertical: 10,
  },
  svgBox: {
    marginVertical: 15,
  },
  socialMediaGoogle: {
    backgroundColor: '#fff',
    borderColor: '#707070',
    borderWidth: 1,
    paddingVertical: 15,
  },
  socialMediaFacebook: {
    backgroundColor: '#4666AB',
    paddingVertical: 15,
  },
  sign: {
    marginVertical: 0,
  },
});
