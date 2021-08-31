import React, {FC} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {Colors, Fonts} from '../../styles';

interface localProps {
  children: string;
  style?: TextStyle;
}

export const H1: FC<localProps> = React.memo(({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
});

const styles = StyleSheet.create({
  text: {
    color: Colors.h1,
    fontSize: Fonts.h1,
    marginBottom: 30,
    fontWeight: '400',
  },
});
