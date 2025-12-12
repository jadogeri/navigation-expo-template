import React from 'react';
import { Pressable, Text, StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/theme';

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  theme?: 'primary' | 'secondary'; // Define button variants
}

export default function ThemedButton({ title, onPress, theme = 'secondary' }: ThemedButtonProps) {
  const colorScheme = useColorScheme(); // 'light' or 'dark'
  const colors = Colors[colorScheme ?? 'light']; // Use light theme if system preference is null

  // Define styles based on the current theme and the button variant prop
  const buttonStyle = {
    backgroundColor: theme === 'primary' ? colors.tint : colors.background,
    borderColor: theme === 'primary' ? 'transparent' : colors.tint,
  };

  const textStyle = {
    color: theme === 'primary' ? colors.background : colors.tint, // Invert text color for primary button
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        buttonStyle,
        { opacity: pressed ? 0.7 : 1 }, // Add simple pressed feedback
      ]}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
