import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, HospitalScreen} from '../../screens';
import {AuthHeader} from '../../components';
import {TabNavigator} from './tab-navigation';

export type UserStackParamList = {
  Home: undefined;
  TabNavigator: undefined;
  Hospital: undefined;
};

const Stack = createNativeStackNavigator();

export function UserNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <AuthHeader />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          header: () => <AuthHeader />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="Hospital"
        component={HospitalScreen}
        options={{
          header: () => <AuthHeader />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
    </Stack.Navigator>
  );
}
