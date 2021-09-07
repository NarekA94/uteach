import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {VideoLessonsList, VideoLessonInfo, VideoLesson} from '../../screens';
import {AuthHeader} from '../../components';

export type VideoStackParamList = {
  VideoLessonsList: undefined;
  VideoLessonInfo: undefined;
};

const Stack = createNativeStackNavigator();

export function VideoLessonsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VideoLessonsList"
        component={VideoLessonsList}
        options={{
          header: props => <AuthHeader {...props} label="Վիդեոդասեր" />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="VideoLessonInfo"
        component={VideoLessonInfo}
        options={{
          header: props => <AuthHeader {...props} label="Վիդեոդասեր" />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="VideoLesson"
        component={VideoLesson}
        options={{
          header: props => <AuthHeader {...props} label="Վիդեոդասեր" />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
    </Stack.Navigator>
  );
}
