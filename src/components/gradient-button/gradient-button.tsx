import React, {FC, memo} from 'react';
import {StyleSheet, TouchableOpacity, Text, ViewStyle} from 'react-native';
import {Colors, Fonts} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';

interface localProps {
  onPress: () => any;
  body?: string;
  width?: string | number;
  continerStyle?: ViewStyle;
}

export const GradientButton: FC<localProps> = memo(
  ({width = '100%', ...props}) => {
    return (
      <TouchableOpacity
        style={[styles.button, {width: width}, props.continerStyle]}
        onPress={props.onPress}>
        <LinearGradient
          start={{x: 0, y: 0.25}}
          end={{x: 0.8, y: 0.8}}
          style={styles.gradint}
          colors={Colors.gradint}>
          <Text style={styles.text}>{props.body}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradint: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 59,
    width: '100%',
    marginVertical: 10,
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
