import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {VideoLessonsList, VideoLessonInfo} from '../../screens';

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
          headerShown: false,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="VideoLessonInfo"
        component={VideoLessonInfo}
        options={{
          headerShown: false,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
    </Stack.Navigator>
  );
}
