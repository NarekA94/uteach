import React, {FC} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Colors, Fonts} from '../../styles';
import {H3} from '../h3/h3';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  onPress?: () => void;
  image?: any;
  body?: string;
  continerStyle?: ViewStyle;
  textStyle?: TextStyle;
  showRigthIcon?: boolean;
}

const testHospitalImage = require('../../assets/images/test-hospital.png');

export const ListItem: FC<Props> = props => {
  return (
    <Pressable
      style={[styles.root, props.continerStyle]}
      onPress={props.onPress}>
      {props?.image && (
        <View>
          <Image
            style={styles.image}
            source={props?.image || testHospitalImage}
          />
        </View>
      )}

      <H3 style={{...styles.body, ...props.textStyle}}>{props?.body || ''}</H3>
      {props.showRigthIcon && (
        <View style={styles.icon}>
          <AntDesign name="right" size={25} color={Colors.default} />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 5,
    borderColor: '#ECEDF1',
    paddingVertical: 7,
  },
  image: {
    height: 60,
    width: 60,
  },
  body: {
    marginLeft: 10,
    marginBottom: 0,
    fontSize: Fonts.default,
  },
  icon: {justifyContent: 'center', alignItems: 'center'},
});
