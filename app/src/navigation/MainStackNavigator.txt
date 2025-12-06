// navigators/TabNavigator.tsx

import * as React from 'react';
import { useColorScheme } from '../hooks/use-color-scheme';
import { RootStackParamList } from '../types/navigation.types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/Modal';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeTabs">
          <Stack.Screen
            name="HomeTabs"
            component={TabNavigator}
            options={{ headerShown: false }} // Hide the stack header for the tabs screen
          />
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}


