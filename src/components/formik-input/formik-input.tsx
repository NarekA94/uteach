import React, { FC, memo, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../styles";

interface localProps {
  name: string;
  required?: boolean;
  contentStyle?: ViewStyle;
  label?: string;
  value: string;
  handleChange: (value: string) => any;
  inputProps?: TextInputProps;
  placeholder?: string;
  errors?: { [key: string]: string | undefined };
  touched?: { [key: string]: boolean };
  eye?: boolean;
  secureTextEntry?: boolean;
}

function areEqual(prevProps: any, nextProps: any) {
  return _.isEqualWith(prevProps, nextProps);
}

export const FormikInput: FC<localProps> = memo((props) => {
  const [secure, setSecure] = useState<boolean | undefined>(false);

  useEffect(() => {
    setSecure(props.secureTextEntry);
  }, [props.secureTextEntry]);

  const error = props?.errors && props?.errors[props.name];
  const touched = props?.touched && props?.touched[props.name];
  function handleChangeSecure() {
    setSecure(!secure);
  }

  return (
    <View style={[styles.root, props.contentStyle]}>
      <View style={styles.inputBox}>
        <TextInput
          secureTextEntry={secure}
          style={[styles.input, touched && error ? styles.error : {}]}
          onChangeText={props?.handleChange(props?.name)}
          value={props?.value || ""}
          placeholder={props?.placeholder || ""}
          placeholderTextColor={Colors.placeholder}
          {...props?.inputProps}
        />
        {props.eye && (
          <View style={styles.eye}>
            <TouchableOpacity
              onPress={handleChangeSecure}
              style={styles.eyeTable}
            >
              <Icon
                name={!secure ? "eye-outline" : "eye-off-outline"}
                size={23}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}, areEqual);

const styles = StyleSheet.create({
  root: {
    position: "relative",
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    paddingLeft: 20,
    borderRadius: 100,
    marginVertical: 12,
    backgroundColor: Colors.inputBackground,
  },
  error: {
    borderColor: "#C62613",
  },
  label: {
    color: "#676A6D",
    fontSize: 16,
    marginLeft: 20,
  },
  eye: {
    position: "absolute",
    right: 10,
    bottom: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  eyeTable: {
    padding: 5,
  },
  inputBox: {
    position: "relative",
  },
});
