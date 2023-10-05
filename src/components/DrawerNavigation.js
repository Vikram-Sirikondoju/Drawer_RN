import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/MainScreen';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Services from '../screens/Services';

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Services" component={Services} />
    </Drawer.Navigator>
  );
}

export default Navigation;
