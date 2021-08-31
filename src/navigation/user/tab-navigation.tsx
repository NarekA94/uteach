import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgXml} from '../../components';
import {HospitalListScreen} from '../../screens';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: Colors.white}}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.default,
          height: 120,
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
        },
        tabBarItemStyle: {height: 50, marginTop: 15},
        tabBarIconStyle: {color: Colors.white},
        tabBarLabelStyle: {color: Colors.white},
      }}>
      <Tab.Screen
        name="Main"
        options={{
          tabBarLabel: 'Գլխավոր',
          tabBarIcon: ({size}) => (
            <Ionicons name="home" color={Colors.white} size={size} />
          ),
        }}
        component={HospitalListScreen}
      />
      <Tab.Screen
        name="Registration"
        options={{
          tabBarLabel: 'Հերթագրում',
          tabBarIcon: () => <SvgXml xml="resgisterTabXml" />,
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="UserProfile"
        options={{
          tabBarLabel: 'Իմ պրոֆիլը',
          tabBarIcon: ({size}) => (
            <Ionicons
              name="person-circle-outline"
              color={Colors.white}
              size={size + 6}
            />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
