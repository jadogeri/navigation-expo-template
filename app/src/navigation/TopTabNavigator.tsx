import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenA from '../screens/ScreenA';
import { MaterialTopTabParamList } from '../types/navigation.types';
import ScreenB from '../screens/ScreenB';

const TopTab = createMaterialTopTabNavigator<MaterialTopTabParamList>();

export function MaterialTopTabsNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="TabA" component={ScreenA} />
      <TopTab.Screen name="TabB" component={ScreenB} />
    </TopTab.Navigator>
  );
}