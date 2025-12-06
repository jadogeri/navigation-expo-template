import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabsNavigator } from './BottomTabNavigator'; // Import the bottom tabs
import { DrawerParamList } from '../types/navigation.types';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';


const Drawer = createDrawerNavigator<DrawerParamList>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeDrawer">
      {/* The main content (tabs) goes here */}
      <Drawer.Screen 
        name="HomeDrawer" 
        component={BottomTabsNavigator} 
        options={{ title: 'Home' }} 
      />
      <Drawer.Screen name="ProfileDrawer" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Drawer.Screen name="SettingsDrawer" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
}