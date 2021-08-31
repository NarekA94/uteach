import React, {useState, FC, memo} from 'react';
import {View, TextInput, StyleSheet, Text, Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import _ from 'lodash';

interface Props {
  name: string;
  label?: string;
  value: string;
  setFieldValue: Function;
  errors?: {[key: string]: string | undefined};
  touched?: {[key: string]: boolean};
}

export const DatePicker: FC<Props> = memo(props => {
  const [show, setShow] = useState(false);
  const error = props?.errors && props?.errors[props.name];
  const touched = props?.touched && props?.touched[props.name];

  const togglePicker = () => {
    setShow(!show);
  };

  const handleConfirm: (selectedDate: Date) => void = selectedDate => {
    props?.setFieldValue(props.name, selectedDate);
    togglePicker();
  };

  return (
    <View>
      <Text style={styles.label}>{props?.label || props?.name}</Text>
      <View>
        <Pressable onPress={togglePicker}>
          <TextInput
            editable={false}
            pointerEvents="none"
            style={[styles.input, touched && error ? styles.error : {}]}
            value={props.value ? moment(props.value).format('MM-DD-YYYY') : ''}
          />
        </Pressable>
      </View>
      {show && (
        <DateTimePickerModal
          isVisible={show}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={togglePicker}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
}, areEqual);

function areEqual(prevProps: any, nextProps: any) {
  return _.isEqualWith(prevProps, nextProps);
}

const styles = StyleSheet.create({
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
  label: {
    color: '#676A6D',
    fontSize: 16,
    marginLeft: 20,
  },
});
