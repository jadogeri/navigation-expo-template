import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, useColorScheme, View } from 'react-native';


import { HelloWave } from '../components/hello-wave';
import ParallaxScrollView from '../components/parallax-scroll-view';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';
import { Link } from 'expo-router';
import React from 'react';
import { Colors } from '../constants/theme';
import ThemedButton from '../components/ThemedButton';
import { useNavigation } from 'expo-router';
import { RootStackNavigationProp, RootStackParamList } from '../types/navigation.types';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const navigation = useNavigation<RootStackNavigationProp>();

  const navigateToDetails = () => {
    // TypeScript knows we are navigating to 'Explore' and *must* provide 
    navigation.navigate('Explore');
    console.log("calling navigation to details function")
  };


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/src/screens/*.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore button to learn more about what's included in this starter app.`}
        </ThemedText>
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedButton 
        title="Navigate to Explore Screen" 
        onPress={() => {navigateToDetails()}} 
        theme="primary" 
      />
      
      {/* <ThemedButton 
        title="Secondary Action Button" 
        onPress={() => alert('Secondary clicked!')} 
        theme="secondary" 
      /> */}
    </View>
      </ThemedView>      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



