import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenA = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Screen A!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ScreenA;
