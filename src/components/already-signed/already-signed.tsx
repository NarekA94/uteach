import React, {FC} from 'react';
import {StyleSheet, View, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../../styles';
import {P} from '../index';

interface Props {
  onPress?: () => void;
  firstWord?: string;
  secondWord?: string;
  continerStyle?: ViewStyle;
}

export const AlreadyRegisterd: FC<Props> = ({
  onPress,
  firstWord = 'Ես արդեն գրանցված եմ։',
  secondWord = 'Մուտք գործել',
  continerStyle,
}) => {
  return (
    <View style={[styles.signIn, continerStyle]}>
      <P>{firstWord}</P>
      <TouchableOpacity style={styles.textBox} onPress={onPress}>
        <P style={styles.text}>{secondWord}</P>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signIn: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
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
