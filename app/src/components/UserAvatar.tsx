import React from 'react';
import { View, StyleSheet, OpaqueColorValue, ColorValue } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type AvatarProps = {
    size: number;
    color: string | OpaqueColorValue | undefined;
    backgroundColor: ColorValue | undefined;
}

export const UserAvatar : React.FC<AvatarProps>= ({ size, color, backgroundColor }) => {
  return (
    <View style={[styles.avatarContainer, { backgroundColor, width: size * 1.5, height: size * 1.5, borderRadius: (size * 1.5) / 2, }]}>
      <Ionicons name="person" size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

