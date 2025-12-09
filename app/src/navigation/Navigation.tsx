import React, {useContext} from "react";


import { NavigationContainer,DarkTheme,DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAppContext } from "../contexts/ThemeContext";





import { RootStackNavigator } from "./RootStackNavigator";

const BottomTab = createBottomTabNavigator();
const Navigation = () => {
    const {state } = useAppContext()

    //alert(typeof auth)
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

 return (
    <>
      {/* <NavigationContainer>
        {hideSplashScreen ? (
          
          <Stack.Navigator screenOptions={{ headerShown: false }}>
  
            <Stack.Screen            
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />               
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
           <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            /> 
            <Stack.Screen
              
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer> */}
      <NavigationContainer theme={state.theme}>
      {/* <BottomTab.Navigator  > */}
         {/* <BottomTab.Screen name="vvv" component={DrawerNavigator} /> */}
        

        {
          // auth?<BottomTabNavigator/> : <RootStackNavigator/>
          <RootStackNavigator />

        }

        {/* </BottomTab.Navigator> */}
      </NavigationContainer>
    </>
  );
};
export default Navigation;


