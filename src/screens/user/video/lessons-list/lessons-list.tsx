import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchInput, VideoCard} from '../../../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {VideoStackParamList} from '../../../../navigation/user/video-navigation';

type Props = NativeStackScreenProps<VideoStackParamList, 'VideoLessonsList'>;

export const VideoLessonsList: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <SearchInput />
      <View style={styles.videoCards}>
        <VideoCard onPress={() => navigation.navigate('VideoLessonInfo')} />
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
