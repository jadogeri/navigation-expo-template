import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenB = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Screen B!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffecb3',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ScreenB;
