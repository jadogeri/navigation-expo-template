import * as React from 'react';
import { AppProvider } from './src/contexts/ThemeContext';
import { ToastProvider } from 'react-native-toast-notifications';



import Navigation from './src/navigation/Navigation';



export default function App() {
 
  return (
    <ToastProvider
      duration={3000} // Toasts disappear after 3 seconds by default
      placement="bottom" // Position at the bottom of the screen
      animationType="slide-in" // Smooth entry animation
    >
    <AppProvider>
        <Navigation />
    </AppProvider>
      </ToastProvider>

  );
}


