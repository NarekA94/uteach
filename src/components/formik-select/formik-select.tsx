import React, {FC, memo} from 'react';
import {StyleSheet, ViewStyle, View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface Props {
  contentStyle?: ViewStyle;
  label?: string;
  name: string;
  value: string;
  setFieldValue: Function;
  errors?: {[key: string]: string | undefined};
  touched?: {[key: string]: boolean};
}

export const FormikSelect: FC<Props> = memo(props => {
  const error = props?.errors && props?.errors[props.name];
  const touched = props?.touched && props?.touched[props.name];
  function inputStyle() {
    if (touched && error) {
      return {...styles.input, ...styles.error};
    }
    return styles.input;
  }
  const handleOnValueChange: (e: string) => void = e => {
    props.setFieldValue(props.name, e || '');
  };
  return (
    <View style={[styles.root, props.contentStyle]}>
      <Text style={styles.label}>{props?.label || props?.name}</Text>
      <RNPickerSelect
        style={{
          inputIOS: inputStyle(),
          inputAndroid: inputStyle(),
        }}
        textInputProps={{
          placeholderTextColor: '#fff',
        }}
        placeholder=""
        value={props?.value || ''}
        onValueChange={handleOnValueChange}
        items={[
          {label: 'Football', value: 'football', key: 'football'},
          {label: 'Baseball', value: 'baseball', key: 'baseball'},
          {label: 'Hockey', value: 'hockey', key: 'hockey'},
        ]}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {},
  label: {
    color: '#676A6D',
    fontSize: 16,
    marginLeft: 20,
  },
  input: {
    height: 45,
    paddingHorizontal: 15,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#31A6DC',
    borderRadius: 100,
    marginVertical: 12,
  },
  error: {
    borderColor: '#C62613',
  },
});
