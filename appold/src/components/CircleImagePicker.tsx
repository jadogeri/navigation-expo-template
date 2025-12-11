import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CircleImagePicker() {
  // Use TypeScript type for the image URI state
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library in Expo.
    // However, if you want to use the camera, you might need to request permissions.
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Restrict to images only
      allowsEditing: true, // Allows the user to edit/crop the image
      aspect: [1, 1], // Enforce a square aspect ratio for better circular fit
      quality: 1, // Highest quality
    });

    console.log(result);

    if (!result.canceled) {
      // Access the selected image's URI from the assets array
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>Tap to Add Photo</Text>
        )}
      </TouchableOpacity>
      {/* Optional: Add a button to change the photo if one is already selected */}
      {imageUri && (
        <Button title="Change Photo" onPress={pickImage} />
      )}
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
  imagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of width/height to make it a perfect circle
    backgroundColor: '#e0e0e0', // Placeholder background color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden', // Ensures the image respects the borderRadius
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#888',
    textAlign: 'center',
  },
});
