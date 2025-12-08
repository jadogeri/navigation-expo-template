import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './src/navigation/RootStackNavigator';
import { AppProvider, useAppContext } from './src/contexts/ThemeContext';


import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme 
} from 'react-native-paper'
import {AppProvider as ThemeProvider} from "./src/contexts/ThemeContext"



export default function App() {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);


  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
      ...NavigationDefaultTheme,
      ...PaperDefaultTheme,
      background: '#ffffff',
      text: '#333333'
    
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
      ...PaperDarkTheme,
      background: '#333333',
      text: '#ffffff'
    
  }

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    
        <ThemeProvider>
    <PaperProvider 
    theme={theme}
    >
    <AppProvider>
      <NavigationContainer >
        <RootStackNavigator />
      </NavigationContainer>
    </AppProvider>
    </PaperProvider>
    </ThemeProvider>
  );
}




/**
 * 
 * import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/config/firebase";
import Navigation from "./src/routes/Navigation";
import { useFonts } from "expo-font";
import { 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper'
import {Provider as ThemeProvider} from "./src/contexts/ThemeContext"



export default function App() {
  console.log(firebaseConfig)
  initializeApp(firebaseConfig);

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
      ...NavigationDefaultTheme,
      ...PaperDefaultTheme,
      background: '#ffffff',
      text: '#333333'
    
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
      ...PaperDarkTheme,
      background: '#333333',
      text: '#ffffff'
    
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


  const [fontsLoaded, error] = useFonts({
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Rajdhani-Regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
    "Rajdhani-SemiBold": require("./assets/fonts/Rajdhani-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
    <ThemeProvider>
    <PaperProvider 
    //theme={theme}
    >
      <Navigation />
      </PaperProvider>
      </ThemeProvider>
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






  // auth.onAuthStateChanged(user =>{
  //   console.log("**************************************this is the current user*******************",user)
  //   if(user){
  //     alert("user logged in")
  //   }else{
  //     alert("user logged out")
  //   }
  // })
  
/**
 * 
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Chat from './src/screens/Chat/Chat';
import Profile from './src/screens/Profile/Profile';
import Setting from './src/screens/Setting/Setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from '@react-navigation/native';

 import BottomTabNavigator from './src/routes/BottomTab/BottomTabNavigator';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  three: Chat
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    {key:'three', title: "Chat"}
  ]);

  return (
    <NavigationContainer >
      
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width , height :layout.height}}
    >
    < BottomTabNavigator />
    </TabView>
    </NavigationContainer>
  );
}

 */


