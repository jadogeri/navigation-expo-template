import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialTopTabsNavigator } from './TopTabNavigator'; // Import the top tabs
import { BottomTabParamList } from '../types/navigation.types';
import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabsNavigator() {
  return (
    <BottomTab.Navigator       
    screenOptions={{
      headerShown:false,
        tabBarInactiveTintColor: 'gold',
        tabBarActiveBackgroundColor: 'brown',
        tabBarActiveTintColor:"blue",
        tabBarInactiveBackgroundColor:"green"
      }}  >
      <BottomTab.Screen name="HomeTab" component={HomeScreen}           
        options={{ tabBarIcon: () => (<Icon name="home" size={26} color="gold" />), title:"Home"  }}
        />
      <BottomTab.Screen name="FeedTab" component={FeedScreen}
        options={{ tabBarIcon: () => (<Icon name="newspaper-outline" size={26} color="gold" />), title:"Feed" }}

       />
      {/* Nest the Material Top Tabs here */}
      <BottomTab.Screen name="TopTabsArea" component={MaterialTopTabsNavigator} 
              options={{ tabBarIcon: () => (<Icon name="person" size={26} color="gold" />), title: 'Top Tabs'  }}

      
     />
    </BottomTab.Navigator>
  );
}