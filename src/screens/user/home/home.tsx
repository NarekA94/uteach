import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchInput, VideoCard} from '../../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {UserStackParamList} from '../../../navigation/user/user';

type Props = NativeStackScreenProps<UserStackParamList, 'Home'>;

export const HomeScreen: FC<Props> = () => {
  return (
    <View style={styles.root}>
      <SearchInput />
      <View style={styles.videoCards}>
        <VideoCard />
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
