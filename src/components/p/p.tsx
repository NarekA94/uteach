import React, {FC} from 'react';
import {StyleSheet, Text, TextStyle, StyleProp} from 'react-native';
import {Colors, Fonts} from '../../styles';

interface localProps {
  style?: StyleProp<TextStyle>;
  color?: string;
}

export const P: FC<localProps> = React.memo(({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
});

const styles = StyleSheet.create({
  text: {
    color: Colors.p,
    fontSize: Fonts.p,
    marginVertical: 10,
  },
});
