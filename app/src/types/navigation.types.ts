// types.tsx

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NavigatorScreenParams } from '@react-navigation/native';

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { StackScreenProps } from '@react-navigation/stack';
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import type { CompositeScreenProps } from '@react-navigation/native';


export type DrawerParamList = {
  HomeDrawer: undefined;
  ProfileDrawer: undefined;
  SettingsDrawer: undefined;
};

export type MaterialTopTabParamList = {
  TabA: undefined;
  TabB: undefined;
};

// Define screen props for individual screens (optional, but helpful)
export type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

// Composite types for nested navigators (useful for screens deep in the hierarchy)
export type TopTabScreenProps<T extends keyof MaterialTopTabParamList> = CompositeScreenProps<
  MaterialTopTabScreenProps<MaterialTopTabParamList, T>,
  BottomTabScreenProps<BottomTabParamList>
>;

// This type should now work correctly
type TabAScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamList, 'TabA'>;

const TabAComponent = ({ navigation, route }: TabAScreenProps) => {
  // Your component code
};

type TabBScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamList, 'TabB'>;

const TabBComponent = ({ navigation, route }: TabBScreenProps) => {
    // Your component code
};
// Define types for the 2 tabs screens
export type BottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  HomeTab: undefined;
  FeedTab: undefined;
  TopTabsArea: undefined; // This will hold the material top tabs
};

// Define types for the root stack screens
export type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<BottomTabParamList>; // This points to the nested tab navigator
  Modal: { userId: string }; // Another screen in the stack
  MainApp: undefined;
  Login: undefined; // Example for an auth flow
  Details: { itemId: string }; // Example with params
};

// Define props for individual screens in the stack (optional, but good practice)
export type ModalScreenProps = NativeStackScreenProps<RootStackParamList, 'Modal'>;
