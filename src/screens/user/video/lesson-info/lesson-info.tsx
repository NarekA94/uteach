import React, {FC} from 'react';
import {View, Image, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {VideoStackParamList} from '../../../../navigation/user/video-navigation';
import {Colors} from '../../../../styles';
import {H1, H3, P, Button} from '../../../../components';
import {styles} from './styles';
import {ListFooterComponent} from './footer';
type Props = NativeStackScreenProps<VideoStackParamList, 'VideoLessonInfo'>;
const lessonInfo = require('../../../../assets/images/video-lesson.png');

const about = [
  'Ծանոթություն',
  'SERPs և որոնման նպատակները',
  'Սքանավորում և ինդեքսավորում',
  'Ալգորիթմներ և SEO թրենդներ',
  'Բանալի բառեր',
  'Կոնտենտ',
  'Հղումներ',
  'SEO գործիքներ',
  'Local SEO',
  'Schema Markup',
];

export const VideoLessonInfo: FC<Props> = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <View style={styles.dot} />
      <P style={styles.itemText}>{item}</P>
    </View>
  );
  const listHeaderComponent = () => {
    return (
      <>
        <Image source={lessonInfo} />
        <View style={styles.heading}>
          <H1 style={styles.h1}>
            Ինչպես բացել օնլայն դպրոց 6 պարզ քայլով Ինչպես բացել օնլայն դպրոց 6
            պարզ
          </H1>
          <H3 style={{color: Colors.white}}>Տևողությունը ՝ 1ժամ 8րոպե</H3>
          <View style={styles.flex_row}>
            <P style={styles.price}>15.000դր.</P>
            <P style={{color: Colors.white}}>12.000 դր</P>
          </View>
          <Button
            continerStyle={styles.button}
            body="Գնել դասընթացը"
            width="60%"
            onPress={() => {}}
          />
        </View>
        <View style={styles.aboutBox}>
          <H3 style={styles.h3}>Դասընթացի մասին</H3>
        </View>
      </>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatContent}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ListHeaderComponent={listHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      data={about}
    />
  );
};
