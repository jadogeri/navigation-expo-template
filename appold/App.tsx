import * as React from 'react';
import { AppProvider } from './src/contexts/ThemeContext';


import Navigation from './src/navigation/Navigation';



export default function App() {
 
  return (

    <AppProvider>
        <Navigation />
    </AppProvider>
  );
}


