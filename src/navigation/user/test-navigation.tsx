import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {VideoLessonsList} from '../../screens';
import {AuthHeader} from '../../components';

export type TestStackParamList = {
  VideoLessonsList: undefined;
  VideoLessonInfo: undefined;
};

const Stack = createNativeStackNavigator();

export function TestLessonsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TestList"
        component={VideoLessonsList}
        options={{
          header: props => <AuthHeader {...props} label="Վիդեոդասեր" />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
    </Stack.Navigator>
  );
}
