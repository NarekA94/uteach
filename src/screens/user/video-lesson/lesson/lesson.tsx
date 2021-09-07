import React, {FC, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {VideoStackParamList} from '../../../../navigation/user/video-navigation';
import Video from 'react-native-video';
import {H2, H3} from '../../../../components';
import {Colors, Fonts} from '../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<VideoStackParamList, 'VideoLessonsList'>;

export const VideoLesson: FC<Props> = () => {
  const [active, setActive] = useState(0);
  const handleError = (e: any) => console.error(e);
  const changeActiveVideo = (index: number) => setActive(index);

  const renderItem = ({_, index}: any) => {
    const color = active === index ? Colors.activeTab : Colors.default;
    return (
      <TouchableOpacity
        onPress={() => changeActiveVideo(index)}
        style={styles.list}>
        <Ionicons color={color} name="videocam" size={25} />
        <H3 style={{marginLeft: 20, color: color}}>Ծանոթություն</H3>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }} // Can be a URL or a local file.
        onBuffer={() => {}} // Callback when remote video is buffering
        onError={handleError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        controls={true}
      />
      <View style={styles.infoBox}>
        <H2>Ծանոթություն</H2>
        <H2 style={{fontSize: Fonts.h3}}>5. Ի՞նչ է SEO-ն։</H2>
        <FlatList data={new Array(6).fill(null)} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 233,
  },
  infoBox: {
    paddingHorizontal: 21,
    paddingVertical: 30,
  },
  list: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
