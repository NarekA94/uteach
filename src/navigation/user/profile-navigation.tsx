import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserInfo, Profile, ProfileVideoLesson} from '../../screens';
import {AuthHeader} from '../../components';

export type ProfileStackParamList = {
  Profile: undefined;
  UserInfo: undefined;
  ProfileVideoLesson: undefined;
};

const Stack = createNativeStackNavigator();

export function ProfileNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: props => <AuthHeader {...props} label="Իմ էջը" />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          header: props => <AuthHeader {...props} label="Անձնական տվյալներ" />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="ProfileVideoLesson"
        component={ProfileVideoLesson}
        options={{
          header: props => <AuthHeader {...props} label="Իմ վիդեոդասերը" />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
    </Stack.Navigator>
  );
}
