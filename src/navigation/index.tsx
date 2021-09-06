import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthNavigation} from './auth/auth';
import {UserNavigation} from './user/user';
import {useRecoilValue} from 'recoil';
import {userSate} from '../recoil';
import {Provider as PaperProvider} from 'react-native-paper';

function Navigation() {
  const user = useRecoilValue(userSate);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          {user ? <UserNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default Navigation;
