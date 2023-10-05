import React from 'react';
import {View, Text, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Services from './Services';
import Icon from 'react-native-vector-icons/FontAwesome'; // Change to the icon library you are using

const localImage = require('../images/img1.jpg');

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={Home}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home" size={size} color={color} style={{width: 30}} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutScreen"
        component={About}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="info" size={size} color={color} style={{width: 30}} />
          ),
        }}
      />
      <Drawer.Screen
        name="ServicesScreen"
        component={Services}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="cogs" size={size} color={color} style={{width: 30}} />
          ),
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="user" size={size} color={color} style={{width: 30}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainScreen;
