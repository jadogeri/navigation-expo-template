// app/about.tsx or screens/AboutScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AboutStackParamList } from '../types/navigation.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';



export type AboutScreenNavigationProp = NativeStackNavigationProp<AboutStackParamList, "About">;

export default function AboutScreen() {
  const appName = "My Awesome Expo App";
  const version = "1.0.0";
  const companyName = "Tech Solutions Inc.";

  const navigation = useNavigation<AboutScreenNavigationProp>();

  const openPrivacyPolicy = () => {
    // Replace with your actual policy URL
    //Linking.openURL('https://www.example.com/privacy'); 
    //Use temp Screen 
    navigation.navigate('Privacy')
  };

  const openTermsOfService = () => {
    // Replace with your actual ToS URL
    //Linking.openURL('https://www.example.com/terms');
        //Use temp Screen 
    navigation.navigate('TermsOfService')

  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{appName}</Text>
        <Text style={styles.version}>Version {version}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.paragraph}>
            This application is built using Expo and React Native, providing a seamless 
            cross-platform experience for our users. We strive to offer the best 
            experience possible.
          </Text>
          <Text style={styles.paragraph}>
            © {new Date().getFullYear()} {companyName}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal & Policies</Text>
          
          <TouchableOpacity onPress={openPrivacyPolicy} style={styles.linkButton}>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openTermsOfService} style={styles.linkButton}>
            <Text style={styles.linkText}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  version: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
  },
  section: {
    width: '100%',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    lineHeight: 22,
  },
  linkButton: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF', // A standard blue link color
  },
});
