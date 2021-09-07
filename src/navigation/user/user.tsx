import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tab-navigation';
import {View} from 'react-native';
import {
  UserInfo,
  ProfileVideoLesson,
  Notifications,
  PaymentHistory,
} from '../../screens';
import {AuthHeader} from '../../components';

export type UserStackParamList = {
  TabNavigator: undefined;
  UserInfo: undefined;
  ProfileVideoLesson: undefined;
  Notifications: undefined;
  PaymentHistory: undefined;
};

const Stack = createNativeStackNavigator();

export function UserNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          header: () => <View />,
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
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: props => <AuthHeader {...props} label="Ծանուցումներ" />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="PaymentHistory"
        component={PaymentHistory}
        options={{
          header: props => (
            <AuthHeader {...props} label="Վճարման պատմություն" />
          ),
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
    </Stack.Navigator>
  );
}
