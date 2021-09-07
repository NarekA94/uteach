import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {VideoCard} from '../../../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {ProfileStackParamList} from '../../../../navigation/user/profile-navigation';

type Props = NativeStackScreenProps<ProfileStackParamList>;

export const ProfileVideoLesson: FC<Props> = () => {
  return (
    <View style={styles.root}>
      <View style={styles.videoCards}>
        <VideoCard profile={true} onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  videoCards: {
    paddingHorizontal: 15,
  },
});
