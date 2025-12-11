import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Define the type for a single settings item
interface SettingsItemProps {
  iconName: string;
  label: string;
  isSwitch?: boolean;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  onPress?: () => void;
}

// Reusable component for a settings list item
const SettingsItem: React.FC<SettingsItemProps> = ({
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

// Main Settings Screen Component
const SettingsScreen: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [receiveNotifications, setReceiveNotifications] = useState(true);

  // Example navigation handler (assuming you have React Navigation set up)
  const handleNavigation = (screenName: string) => {
    console.log(`Navigate to ${screenName}`);
    // Example: navigation.navigate(screenName)
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingsItem
            iconName="account"
            label="Profile"
            onPress={() => handleNavigation('Profile')}
          />
          <SettingsItem
            iconName="lock-outline"
            label="Privacy & Security"
            onPress={() => handleNavigation('Privacy')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Preferences</Text>
          <SettingsItem
            iconName="theme-light-dark"
            label="Dark Mode"
            isSwitch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
          />
          <SettingsItem
            iconName="bell-outline"
            label="Notifications"
            isSwitch
            value={receiveNotifications}
            onValueChange={setReceiveNotifications}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <SettingsItem
            iconName="information-outline"
            label="About"
            onPress={() => handleNavigation('About')}
          />
          <SettingsItem
            iconName="help-circle-outline"
            label="Help & FAQ"
            onPress={() => handleNavigation('Help')}
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
    fontSize: 32,
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

export default SettingsScreen;