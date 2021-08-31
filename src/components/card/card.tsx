import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Colors} from '../../styles';
import {SvgXml, SvgXmlType} from '../../components';

interface Props {
  body: string;
  xml: SvgXmlType;
  continerStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  onPress?: () => void;
}

export const Card: React.FC<Props> = React.memo(props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.root,
        props.continerStyle,
        props.disabled && styles.disabled,
      ]}>
      <SvgXml xml={props.xml} />
      <Text style={[styles.text, props?.textStyle]}>{props.body}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    borderRadius: 20,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width / 2 - 40,
    height: Dimensions.get('window').width / 2 - 50,
    marginBottom: 15,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    color: Colors.default,
    fontSize: 16,
    marginLeft: 5,
    textAlign: 'center',
  },
});
