 import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabsNavigator } from './BottomTabNavigator'; // Import the bottom tabs
import { AboutStackParamList, FriendsStackParamList, DrawerParamList, DrawerStackParamList, SettingsStackParamList } from '../types/navigation.types';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerContent from "../components/DrawerContent";
import ChatScreen from "../screens/ChatScreen";
import SupportScreen from "../screens/SupportScreen";
import { createStackNavigator } from "@react-navigation/stack";
import FAQScreen from "../screens/FAQScreen";
import AboutScreen from "../screens/AboutScreen";
import HelpScreen from "../screens/Help";
import PrivacyPolicyScreen from "../screens/PrivacyPolicy";
import TermsOfService from "../screens/TermsOfServiceScreen";
import FriendsListScreen from "../screens/FriendListScreen";
import FriendDetailScreen from "../screens/FriendDetailScreen";


const DrawerStack = createStackNavigator<DrawerStackParamList>();
const SettingsStack = createStackNavigator<SettingsStackParamList>();
const AboutStack = createStackNavigator<AboutStackParamList>();
const FriendsStack = createStackNavigator<FriendsStackParamList>();



export function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      {/* The main application flow (drawer) */}
      <SettingsStack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ headerShown: false }} // Hide stack header for the screen that renders the drawer
      />
      {/* Other stack screens (e.g., details, login) */}
      <SettingsStack.Screen name="About" component={AboutStackNavigator} options={{ title: 'About' }} />
      <SettingsStack.Screen name="Help" component={HelpScreen} options={{ title: 'Help' }}/>
      <SettingsStack.Screen name="Privacy" component={PrivacyPolicyScreen} options={{ title: 'Privacy Policy' }} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <SettingsStack.Screen name="Support" component={SupportScreen} options={{ title: 'Support' }}/>
    </SettingsStack.Navigator>
  );
}

export function FriendsStackNavigator() {
  return (
    <FriendsStack.Navigator initialRouteName="FriendsList">
      <FriendsStack.Screen
        name="FriendsList" 
        component={FriendsListScreen} 
        options={{ headerShown: false }} // Hide stack header for the screen that renders the drawer
      />
      <FriendsStack.Screen name="FriendsDetail" component={FriendDetailScreen} options={{ title: 'Friends Detail' }} />

    </FriendsStack.Navigator>
  );
}

export function SupportStackNavigator() {
  return (
    <DrawerStack.Navigator initialRouteName="Support">
      <DrawerStack.Screen 
        name="Support" 
        component={SupportScreen} 
        options={{ headerShown: false }} // Hide stack header for the screen that renders the drawer
      />

      <DrawerStack.Screen name="FAQ" component={FAQScreen} options={{ title: 'FAQ' }} />

    </DrawerStack.Navigator>
  );
}


export function AboutStackNavigator() {
  return (
    <AboutStack.Navigator initialRouteName="About">
      <AboutStack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ headerShown: false }} // Hide stack header for the screen that renders the drawer
      />

      <AboutStack.Screen name="TermsOfService" component={TermsOfService} options={{ title: 'Terms of Service' }} />
      <AboutStack.Screen name="Privacy" component={PrivacyPolicyScreen} options={{ title: 'Privacy Policy' }} />

    </AboutStack.Navigator>
  );
}





const Drawer = createDrawerNavigator<DrawerParamList>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeDrawer" //defaultStatus="open"
               drawerContent={(props) => <DrawerContent {...props} />}

    >
      {/* The main content (tabs) goes here */}
      <Drawer.Screen 
        name="HomeDrawer" 
        component={BottomTabsNavigator} 
        options={{ title: 'Home' }} 
      />
      <Drawer.Screen name="ProfileDrawer" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Drawer.Screen name="SettingsDrawer" component={SettingsStackNavigator} options={{ title: 'Settings' }} />
      <Drawer.Screen name="ChatDrawer" component={ChatScreen} options={{ title: 'Chat' }} />
      <Drawer.Screen name="FriendsDrawer" component={FriendsStackNavigator} options={{ title: 'Friends' }} />
      <Drawer.Screen name="SupportDrawer" component={SupportStackNavigator} options={{ title: 'Support' }} />


    </Drawer.Navigator>
  );
}

