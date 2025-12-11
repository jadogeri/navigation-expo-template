import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

// A union type for common icon libraries
type AvailableIcons = ComponentProps<typeof Ionicons>['name'] | ComponentProps<typeof AntDesign>['name'] | ComponentProps<typeof FontAwesome>['name'];

interface IconInCircleProps {
  iconName: AvailableIcons;
  iconFamily: 'Ionicons' | 'AntDesign' | 'FontAwesome'; // Specify which library the icon belongs to
  size?: number;
  color?: string;
  circleColor?: string;
  onPress?: () => void;
}

const IconInCircle: React.FC<IconInCircleProps> = ({
  iconName,
  iconFamily,
  size = 32,
  color = '#fff',
  circleColor = '#007AFF', // Default Expo blue color
  onPress,
}) => {
  const circleSize = size + 16; // Add some padding around the icon

  const styles = StyleSheet.create({
    circle: {
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2, // Half of width/height makes a circle
      backgroundColor: circleColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const IconComponent = iconFamily === 'Ionicons' ? Ionicons : iconFamily === 'AntDesign' ? AntDesign : FontAwesome;

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={styles.circle}>
        {/* Type assertion might be needed if using a dynamic family selection like this */}
        <IconComponent name={iconName as any} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default IconInCircle;
