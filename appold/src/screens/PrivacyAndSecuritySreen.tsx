import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ScrollView, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as SecureStore from 'expo-secure-store'; // Use for secure storage

// Define types
interface SecurityItemProps {
  iconName: string;
  label: string;
  isSwitch?: boolean;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  onPress?: () => void;
}

// Reusable component for an item
const SecurityItem: React.FC<SecurityItemProps> = ({
  iconName,
  label,
  isSwitch = false,
  value,
  onValueChange,
  onPress,
}) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress} disabled={isSwitch}>
    <MaterialCommunityIcons name={iconName} size={24} color="#555" style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
    {isSwitch ? (
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#3b82f6" : "#f4f3f4"}
        onValueChange={onValueChange}
        value={value}
      />
    ) : (
      <Ionicons name="chevron-forward-outline" size={24} color="#999" />
    )}
  </TouchableOpacity>
);

// Main Privacy and Security Screen Component
const PrivacyAndSecurityScreen: React.FC = () => {
  const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
  const [locationServices, setLocationServices] = useState(false);
  const [dataCollectionConsent, setDataCollectionConsent] = useState(true);

  // Function to handle navigation (replace with actual navigation logic)
  const handleNavigation = (screenName: string) => {
    console.log(`Navigate to ${screenName}`);
    // Example: navigation.navigate(screenName)
  };

  // Example of handling a secure action (e.g., changing password)
  const handleChangePassword = () => {
    Alert.alert("Change Password", "Navigate to password reset screen.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Privacy & Security</Text>

        {/* Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <SecurityItem
            iconName="face-recognition"
            label="Enable Face ID / Biometrics"
            isSwitch
            value={isFaceIdEnabled}
            onValueChange={setIsFaceIdEnabled}
          />
          <SecurityItem
            iconName="formtextbox-password"
            label="Change Password"
            onPress={handleChangePassword}
          />
          <SecurityItem
            iconName="device-mobile"
            label="Manage Devices"
            onPress={() => handleNavigation('ManageDevices')}
          />
        </View>

        {/* Privacy Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy</Text>
          <SecurityItem
            iconName="map-marker-outline"
            label="Location Services"
            isSwitch
            value={locationServices}
            onValueChange={setLocationServices}
          />
          <SecurityItem
            iconName="database-outline"
            label="Data Collection Consent"
            isSwitch
            value={dataCollectionConsent}
            onValueChange={setDataCollectionConsent}
          />
          <SecurityItem
            iconName="file-document-outline"
            label="Privacy Policy"
            onPress={() => handleNavigation('PrivacyPolicy')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#333',
  },
  section: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    paddingHorizontal: 16,
    paddingVertical: 10,
    textTransform: 'uppercase',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 16,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default PrivacyAndSecurityScreen;
