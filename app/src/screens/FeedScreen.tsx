import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


// Define the type for a single item in the feed
interface FeedItem {
  id: string;
  title: string;
  content: string;
}

// Dummy data for the feed
const dummyData: FeedItem[] = [
  { id: '1', title: 'First Post', content: 'This is the content of the first post.' },
  { id: '2', title: 'Second Post', content: 'Here is some more content for the second post.' },
  { id: '3', title: 'Third Post', content: 'And the final post content goes here.' },
];

// Define types for navigation if using React Navigation
type FeedScreenNavigationProp = typeof useNavigation<any>; // Replace 'any' with specific types for a real app
// type FeedScreenRouteProp = RouteProp<any, 'Feed'>; // Example if params are passed

const FeedScreen = () => {
  const [data, setData] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<FeedScreenNavigationProp>();

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setData(dummyData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }: { item: FeedItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.content}</Text>
      {/* Example of navigating to a detail screen */}
      {/* <Button 
        title="View Details" 
        onPress={() => navigation.navigate('Details', { itemId: item.id })} 
      /> */}
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default FeedScreen;
