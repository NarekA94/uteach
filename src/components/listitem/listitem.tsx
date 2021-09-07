import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {Colors} from '../../styles';
import {H3} from '../h3/h3';
import {VectorIcon, iconFamily, SvgXml, SvgXmlType} from '..';

interface Props {
  onPress?: () => void;
  image?: any;
  body?: string;
  continerStyle?: ViewStyle;
  textStyle?: TextStyle;
  showRigthIcon?: boolean;
  groupName?: iconFamily;
  iconName?: string;
  iconXml?: SvgXmlType;
}

export const ListItem: FC<Props> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.list}>
      <View style={styles.icon}>
        {props?.iconXml ? (
          <SvgXml xml={props?.iconXml} />
        ) : (
          <VectorIcon
            groupName={props?.groupName || 'Ion'}
            color={Colors.default}
            name={props?.iconName || 'videocam'}
            size={25}
          />
        )}
      </View>

      <H3 style={styles.h3}>{props?.body || ''}</H3>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 233,
  },
  icon: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    paddingHorizontal: 21,
    paddingVertical: 30,
  },
  list: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  h3: {marginLeft: 20, color: Colors.black},
});
