import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Friend, FRIENDS } from '../data/friends';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FriendsStackParamList } from '../types/navigation.types';

// Define the route prop type for the Details screen
type FriendDetailsScreenRouteProp = RouteProp<FriendsStackParamList, 'FriendsDetail'>;

const FriendDetailScreen = () => {
  // Use useRoute hook to access the route object
  const route = useRoute<FriendDetailsScreenRouteProp>();

  // Access the 'id' parameter from route.params
  const { id } = route.params;
  // In a production app, you might fetch this data from an API based on the ID.
  // We use the local array here for simplicity.
  const friend: Friend | undefined = FRIENDS.find(f => f.id === id);

  if (!friend) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Friend not found or loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: friend.avatarUrl }} style={styles.detailAvatar} />
      <Text style={styles.detailName}>{friend.name}</Text>
      <Text style={[styles.detailStatus, { color: friend.status === 'online' ? 'green' : 'gray' }]}>
        Status: {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
      </Text>
      <Text style={styles.lastSeen}>Last seen: {friend.lastSeen}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  detailAvatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailStatus: {
    fontSize: 18,
    marginBottom: 5,
  },
  lastSeen: {
    fontSize: 16,
    color: '#666',
  },
});

export default FriendDetailScreen;
