import React, {FC} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
  Pressable,
} from 'react-native';
import {VectorIcon} from '..';
import {Colors} from '../../styles';

const defaultAvatar = require('../../assets/images/profile-image.png');

interface Props {
  source?: ImageSourcePropType;
  continerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  onPressChange?: () => void;
  selectIcon?: boolean;
}

export const Avatar: FC<Props> = props => {
  return (
    <View style={[styles.root, props.continerStyle]}>
      <Image
        style={[styles.image, props.imageStyle]}
        source={props.source || defaultAvatar}
      />
      {props.selectIcon && (
        <Pressable onPress={props.onPressChange} style={styles.change}>
          <VectorIcon groupName="Mac" size={20} name="pencil" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 130,
    borderRadius: 100,
    height: 130,
    position: 'relative',
  },
  image: {
    borderRadius: 100,
    width: '100%',
    height: '100%',
    borderWidth: 4,
    borderColor: Colors.white,
  },
  change: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    width: 38,
    height: 38,
    right: -90,
    top: -40,
    borderRadius: 100,
  },
});
