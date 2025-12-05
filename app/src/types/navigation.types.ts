// types.tsx

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NavigatorScreenParams } from '@react-navigation/native';

// Define types for the 2 tabs screens
export type BottomTabParamList = {
  Home: undefined;
  Explore: undefined;
};

// Define types for the root stack screens
export type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<BottomTabParamList>; // This points to the nested tab navigator
  Modal: { userId: string }; // Another screen in the stack
};

// Define props for individual screens in the stack (optional, but good practice)
export type ModalScreenProps = NativeStackScreenProps<RootStackParamList, 'Modal'>;
