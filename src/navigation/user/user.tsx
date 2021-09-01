import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tab-navigation';
import {View} from 'react-native';

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
        name="TabNavigator"
        component={TabNavigator}
        options={{
          header: () => <View />,
          contentStyle: {backgroundColor: '#fff'},
        }}
      />
    </Stack.Navigator>
  );
}
