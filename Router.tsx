import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { CameraScreen, LoginScreen } from './Screens'
import React from 'react';

const Tab = createBottomTabNavigator()
// const CameraStack = createStackNavigator()

const Router: () => React.ReactNode = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="scannerScreen">
        <Tab.Screen name="scannerScreen" component={CameraScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router
