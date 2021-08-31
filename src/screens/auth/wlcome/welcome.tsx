import React from 'react';
import {StyleSheet, View} from 'react-native';
import {H1, Button, SvgXml, AlreadyRegisterd} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {AuthStackParamList} from '../../../navigation/auth/auth';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

export const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  const handlePressRegister: (type?: 'doctor' | 'patient') => void = type => {
    navigation.navigate('RegisterStep1', {type: type});
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.root}>
        <View style={styles.buttons}>
          <H1>Գրանցվել</H1>
          <Button body="Բժիշկ" onPress={() => handlePressRegister('doctor')} />
          <Button
            body="Հիվանդ"
            onPress={() => handlePressRegister('patient')}
          />
        </View>
        <AlreadyRegisterd onPress={() => navigation.navigate('SignIn')} />
        <View style={styles.midLogo}>
          <SvgXml xml="bigLogoXml" />
        </View>
        <View style={styles.logo}>
          <SvgXml xml="logoXml" />
        </View>
        <View style={styles.bigLogo}>
          <SvgXml xml="bigLogoXml" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigLogo: {
    position: 'absolute',
    right: -14,
    bottom: -87,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midLogo: {
    position: 'absolute',
    left: -110,
    top: -190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    maxWidth: 500,
    width: '70%',
    alignItems: 'center',
    marginTop: -60,
  },
  signIn: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  text: {
    color: Colors.defaultLigth,
    marginVertical: 0,
  },
  textBox: {
    marginLeft: 5,
    borderColor: Colors.defaultLigth,
    borderBottomWidth: 1,
  },
});
