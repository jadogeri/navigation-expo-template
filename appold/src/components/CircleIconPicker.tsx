import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Alert, TouchableOpacity, Text, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

// Define where to store the image within the app's local directory
const localImageUri = `${FileSystem.Directory}profileIcon.jpg`;

export default function CircleIconPicker() {
  const [iconUri, setIconUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to copy the picked image to a persistent local directory
  const saveImageLocally = async (uri: string) => {
    try {
      // Ensure the destination is unique to your app's persistent storage
      await FileSystem.copyAsync({
        from: uri,
        to: localImageUri
      });
      setIconUri(localImageUri);
      Alert.alert("Success", "Icon saved locally!");
    } catch (error) {
      console.error("Failed to save image locally", error);
      Alert.alert("Error", "Could not save image locally.");
    }
  };

  const pickImage = async () => {
    setIsLoading(true);
    // On Android < 13, this opens the "regular" picker which allows access to the file manager.
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Allows cropping
      aspect:[20,20], // Enforce square aspect ratio
      quality: 1,
      // For DocumentPicker you can set copyToCacheDirectory: true for immediate FileSystem access.
    });
    setIsLoading(false);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedUri = result.assets[0].uri;
      // The URI returned by ImagePicker is a temporary cached file URI. We must copy it.
      await saveImageLocally(selectedUri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.iconPlaceholder} disabled={isLoading}>
        {iconUri ? (
          // Use the persisted local URI for the image source
          <Image source={{ uri: iconUri }} style={styles.icon} />
        ) : (
          <Text style={styles.placeholderText}>
            {isLoading ? 'Loading...' : 'Tap to Add Icon'}
          </Text>
        )}
      </TouchableOpacity>
      {/* Optional button for clarity */}
      <Button title="Select Icon" onPress={pickImage} disabled={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes it a circle (half of width/height)
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden', // Ensures the image stays within the circular boundary
    borderWidth: 2,
    borderColor: '#aaa',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#888',
    textAlign: 'center',
    padding: 10,
  },
});
