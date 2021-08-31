import React, {FC} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {Colors, Fonts} from '../../styles';

interface localProps {
  children: string;
  style?: TextStyle;
}

export const H3: FC<localProps> = React.memo(props => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
});

const styles = StyleSheet.create({
  text: {
    color: Colors.default,
    fontSize: Fonts.h3,
    // marginBottom: 30,
  },
});
