// screens/SupportScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { RootStackParamList } from '../types/navigation.types';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';


export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SupportScreen = () => {
      const toast = useToast();
      const navigation = useNavigation<HomeScreenNavigationProp>();

  const showToastMessage = () => {
    toast.show("Your action was successful!", {
      type: "success",
      duration: 2000, // Custom duration for this specific toast (2 seconds)
      animationType: "zoom-in",
    });
  };
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@example.com?subject=Support Request');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  const handleFaqPress = () => {
    //Navigate to a dedicated FAQ screen
    navigation.navigate("FAQ"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Customer Support</Text>
        <Text style={styles.description}>
          We are here to help you with any questions or issues you may have.
        </Text>

        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.button} onPress={handleFaqPress}>
            <Text style={styles.buttonText}>View FAQs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
            <Text style={styles.buttonText}>Email Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePhonePress}>
            <Text style={styles.buttonText}>Call Us</Text>
            
          </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={showToastMessage}>
            <Text style={styles.buttonText}>Show Toast</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Our support team is available from 9 AM to 5 PM, Monday to Friday.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  optionContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF', // iOS blue
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 40,
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default SupportScreen;


