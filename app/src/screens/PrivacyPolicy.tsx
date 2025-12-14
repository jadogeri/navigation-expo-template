// app/privacy.tsx or screens/PrivacyScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform } from 'react-native';

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.lastUpdated}>Last Updated: December 13, 2025</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Information We Collect</Text>
          <Text style={styles.paragraph}>
            We collect personal information that you voluntarily provide to us when registering 
            on the App or otherwise contacting us. This information may include your name, 
            email address, and usage data.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We use the information we collect or receive for the following purposes:
          </Text>
          <Text style={styles.listItem}>• To facilitate account creation and login process.</Text>
          <Text style={styles.listItem}>• To send administrative information to you (updates, etc.).</Text>
          <Text style={styles.listItem}>• To respond to your inquiries and offer support.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Sharing Your Information</Text>
          <Text style={styles.paragraph}>
            We only share information with your consent, to comply with laws, to protect 
            your rights, or to fulfill business obligations. We will never sell your data 
            to third parties.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have questions or comments about this policy, you may email us at: 
            <Text style={styles.emailText}> privacy@example.com</Text>
          </Text>
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  lastUpdated: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    color: '#555',
    marginLeft: 15,
    lineHeight: 24,
  },
  emailText: {
    fontWeight: 'bold',
    color: '#007AFF',
  }
});
