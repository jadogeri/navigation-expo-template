import React, { useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';


const TermsOfService = () => {
  const [accepted, setAccepted] = useState(false);
  const screenHeight = Dimensions.get('window').height;

  // In a real app, you would fetch this text from an API or a static file.
  const termsText = "Welcome to Our App!\\n\\n1. **Acceptance of Terms**\\nBy accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement.\\n\\n2. **Privacy Policy**\\nYour use of the service is also subject to our Privacy Policy. Please review our Privacy Policy, which also governs the Service and informs users of our data collection practices.\\n\\n3. **Services Usage Restrictions**\\nYou may not use the Services in a service bureau, outsourcing, renting, sublicensing, or time-sharing capacity, including to build or deploy apps for third parties.\\n\\n4. **Your Account**\\nIf you use this site, you are responsible for maintaining the confidentiality of your account and password.\\n\\n5. **Limitation of Liability**\\nIn no event shall the company be liable for any direct, indirect, incidental, special, or consequential damages.\\n\\nThank you for using our app! Please agree to continue.";

  const handleAccept = () => {
    // Logic to handle acceptance (e.g., save to AsyncStorage, navigate to Home screen)
    alert("Terms Accepted! Proceeding to the app.");
    // Example navigation with expo router: router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Terms of Service</Text>
      </View>
      
      <ScrollView style={styles.scrollViewContent} contentContainerStyle={styles.innerScrollView}>
        {/* Using a simple Text component to display the terms. */}
        <Text style={styles.termsBody}>
          {termsText}
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title={accepted ? "Accepted" : "I Accept the Terms"}
          onPress={handleAccept}
          disabled={accepted}
          color="#007AFF"
        />
        {/* A checkbox could be added here for explicit agreement UI/UX */}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20, // To account for the status bar area
  },
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  innerScrollView: {
    paddingVertical: 20,
  },
  termsBody: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
});

export default TermsOfService;
