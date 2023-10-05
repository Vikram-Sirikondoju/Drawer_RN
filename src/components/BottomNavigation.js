import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library you prefer
import Home from '../screens/MainScreen';
import About from '../screens/About';
import Services from '../screens/Services';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'About') {
            iconName = focused ? 'info-circle' : 'info-circle';
          } else if (route.name === 'Services') {
            iconName = focused ? 'cogs' : 'cogs';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          // You can customize the icon library, size, and color here
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        style={{}}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default App;
