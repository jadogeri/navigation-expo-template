import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialTopTabsNavigator } from './TopTabNavigator'; // Import the top tabs
import { BottomTabParamList } from '../types/navigation.types';
import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabsNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="HomeTab" component={HomeScreen} />
      <BottomTab.Screen name="FeedTab" component={FeedScreen} />
      {/* Nest the Material Top Tabs here */}
      <BottomTab.Screen name="TopTabsArea" component={MaterialTopTabsNavigator} options={{ title: 'Top Tabs' }} />
    </BottomTab.Navigator>
  );
}