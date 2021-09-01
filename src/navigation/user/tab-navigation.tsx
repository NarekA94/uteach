import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {HomeScreen} from '../../screens';
import {AuthHeader, SvgXml} from '../../components';

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
          backgroundColor: Colors.white,
          height: 120,
        },
        tabBarItemStyle: {height: 50, marginTop: 15},
        tabBarIconStyle: {color: Colors.default},
        tabBarLabelStyle: {color: Colors.default},
      }}>
      <Tab.Screen
        name="Home"
        options={{
          header: () => <AuthHeader label="Թեստեր" />,
          headerShown: true,
          tabBarLabel: '',
          tabBarLabelStyle: {fontSize: 14, color: Colors.default},
          tabBarIcon: ({focused}) => (
            <View style={styles.iconBox}>
              <SvgXml
                svgProps={{color: focused && Colors.activeTab}}
                xml="testXml"
              />
              <Text
                style={{color: focused ? Colors.activeTab : Colors.default}}>
                Թեստեր
              </Text>
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Video"
        options={{
          header: () => <AuthHeader label="Վիդեոդասեր" />,
          headerShown: true,
          tabBarLabel: '',
          tabBarLabelStyle: {fontSize: 14, color: Colors.default},
          tabBarIcon: ({size, focused}) => (
            <View style={styles.iconBox}>
              <Ionicons
                name="videocam"
                color={focused ? Colors.activeTab : Colors.default}
                size={size + 6}
              />
              <Text
                style={{color: focused ? Colors.activeTab : Colors.default}}>
                Վիդեոդասեր
              </Text>
            </View>
          ),
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="UserProfile"
        options={{
          header: () => <AuthHeader label="Իմ էջը" />,
          headerShown: true,
          tabBarLabel: '',
          tabBarLabelStyle: {fontSize: 14, color: Colors.default},
          tabBarIcon: ({size, focused}) => (
            <View style={styles.iconBox}>
              <FontAwesome
                name="user"
                color={focused ? Colors.activeTab : Colors.default}
                size={size + 6}
              />
              <Text
                style={{color: focused ? Colors.activeTab : Colors.default}}>
                Իմ էջը
              </Text>
            </View>
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
