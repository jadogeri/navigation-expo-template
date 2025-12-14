// app/help.tsx or screens/HelpScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as Linking from 'expo-linking';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HelpScreen() {
  // Hook for navigation using Expo Router
  const router = useRouter();

  const navigateToFAQ = () => {
    // Navigates to the file system route app/faq.tsx
    router.push('/faq'); 
  };

  const callSupport = () => {
    // Use Linking to prompt the user to call a number
    Linking.openURL('tel:+1-800-555-0199').catch(() => {
        Alert.alert("Error", "Could not open dialer. Please call 1-800-555-0199 manually.");
    });
  };

  const emailSupport = () => {
    // Use Linking to open the user's email client
    Linking.openURL('mailto:support@example.com?subject=Help%20Request').catch(() => {
        Alert.alert("Error", "Could not open email client. Please email support@example.com.");
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Need Help?</Text>
        <Text style={styles.subtitle}>
          We're here to assist you with any questions or issues you might have.
        </Text>

        {/* FAQ Section */}
        <TouchableOpacity style={styles.helpOption} onPress={navigateToFAQ}>
          <Text style={styles.optionText}>📖 Visit our FAQ & Help Center</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Contact Options Section */}
        <View style={styles.contactContainer}>
            <Text style={styles.contactHeader}>Contact Us Directly</Text>

            <TouchableOpacity style={styles.contactButton} onPress={emailSupport}>
                <Text style={styles.contactButtonText}>📧 Send an Email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactButton} onPress={callSupport}>
                <Text style={styles.contactButtonText}>📞 Call Support (M-F 9-5)</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>
            <Text style={styles.footerText}>Response times may vary. We appreciate your patience.</Text>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  helpOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
  },
  arrow: {
    fontSize: 24,
    color: '#999',
  },
  contactContainer: {
    width: '100%',
    marginTop: 20,
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#444',
  },
  contactButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  }
});
