import React, {useEffect} from 'react';
import Navigation from './navigation';
import {RecoilRoot} from 'recoil';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

export default App;
