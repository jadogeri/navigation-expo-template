import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// You might need an actual icon library like @expo/vector-icons
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';



// Define the types for your navigation stack (must match your RootStackParamList elsewhere)
type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// Define the props for this specific screen's navigation
type ProfileScreenNavigationProp = NavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const goBack = () => {
    // Navigate back to the previous screen in the stack (often 'Home')
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Optional: Add a custom back button if you aren't using a stack navigator header */}
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#007AFF" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        
        {/* Placeholder for a user avatar */}
        <Image
          style={styles.avatar}
          source={{ uri: 'i.pravatar.cc' }} // Example placeholder image URL
        />

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>

        <View style={styles.infoSection}>
          <Text style={styles.infoText}>Location: New Orleans, LA</Text>
          <Text style={styles.infoText}>Joined: January 2025</Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logged Out')}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backButtonText: {
    marginLeft: 5,
    color: '#007AFF',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  infoSection: {
    width: '80%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoText: {
    fontSize: 18,
    paddingVertical: 5,
    color: '#444',
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
