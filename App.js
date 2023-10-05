import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/components/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/components/BottomNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
