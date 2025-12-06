import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from '../types/navigation.types';
import { DrawerNavigator } from './DrawerNavigation';

const Stack = createStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      {/* The main application flow (drawer) */}
      <Stack.Screen 
        name="MainApp" 
        component={DrawerNavigator} 
        options={{ headerShown: false }} // Hide stack header for the screen that renders the drawer
      />
      {/* Other stack screens (e.g., details, login) */}
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}