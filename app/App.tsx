import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './src/navigation/RootStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export function App2() {
  return (
    <RootStackNavigator />
  );
}
