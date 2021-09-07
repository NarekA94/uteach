import React, {FC} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewStyle} from 'react-native';
import {Colors} from '../../styles';

const VectorIcons = {
  Ma: MaterialIcons,
  Ev: EvilIcons,
  En: Entypo,
  Aw: FontAwesome,
  AW5: FontAwesome5,
  Fo: Foundation,
  Ion: Ionicons,
  Mac: MaterialCommunityIcons,
  Zo: Zocial,
  Oc: Octicons,
  Si: SimpleLineIcons,
};

export type iconFamily = keyof typeof VectorIcons;

interface Props {
  groupName: iconFamily;
  name: string;
  size?: number;
  style?: ViewStyle;
  color?: string;
}

export const VectorIcon: FC<Props> = props => {
  let Icon = VectorIcons[props.groupName];
  return (
    <Icon
      name={props.name}
      size={props.size}
      color={props.color || Colors.default}
      style={props.style}
    />
  );
};
