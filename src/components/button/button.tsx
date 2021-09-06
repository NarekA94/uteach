import React, {FC, memo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Colors, Fonts} from '../../styles';

interface localProps {
  onPress: () => any;
  body?: string;
  width?: string | number;
  continerStyle?: ViewStyle;
  whitGradint?: boolean;
  textStyle?: TextStyle;
}

export const Button: FC<localProps> = memo(({width = '100%', ...props}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {width: width}, props.continerStyle]}
      onPress={props.onPress}>
      {props.body ? (
        <Text style={[styles.text, props?.textStyle]}>{props.body}</Text>
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 17,
    width: '100%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: Fonts.button,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
