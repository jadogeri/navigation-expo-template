// navigators/TabNavigator.tsx

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import { IconSymbol } from '../components/ui/icon-symbol';
import { Colors } from '../constants/theme';
import { useColorScheme } from '../hooks/use-color-scheme';
import { HapticTab } from '../components/haptic-tab';
import { BottomTabParamList } from '../types/navigation.types';
import ExploreScreen from '../screens/Explore';


const Tab = createBottomTabNavigator<BottomTabParamList>();


export default function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tab.Screen
        name="Home"    
        component={HomeScreen} 
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen} 
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}






