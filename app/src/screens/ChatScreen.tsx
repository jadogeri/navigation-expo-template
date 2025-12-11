import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IconInCircle from '../components/IconInCircle';

export default function ChatScreen() {
  // Use a state to store the selected icon info
  const [currentIcon, setCurrentIcon] = useState({ name: 'heart', family: 'FontAwesome' as const });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Selected Icon:</Text>
      <IconInCircle
        iconName={"heart"}
        iconFamily={currentIcon.family}
        size={40}
        color="#fff"
        circleColor="red"
        onPress={() => alert('Icon Pressed!')}
      />
      {/* You would integrate an actual icon picker UI here to change `currentIcon` state */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
  },
});
