import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './src/navigation/RootStackNavigator';
import { AppProvider } from './src/contexts/ThemeContext';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}



