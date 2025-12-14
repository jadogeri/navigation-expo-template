import React from 'react';
import { View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native';
import { Friend, FRIENDS } from '../data/friends';
import { useNavigation } from '@react-navigation/native';
import { FriendsStackParamList } from '../types/navigation.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UserAvatar } from '../components/UserAvatar';
import { getRandomColor } from '../helper/getRandomColor';

export type FriendsScreenNavigationProp = NativeStackNavigationProp<FriendsStackParamList>;

const FriendsListScreen = () => {
  const navigation = useNavigation<FriendsScreenNavigationProp>();

  const handleNavigation = (friendId: number) =>{       
    navigation.navigate('FriendsDetail', { id: friendId })
  }
  const renderItem = ({ item }: { item: Friend }) => (
      <Pressable style={styles.itemContainer} onPress={()=>{handleNavigation(item.id) }}>
        <UserAvatar size={28} color="white" backgroundColor={getRandomColor()} />     
         <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={[styles.status, {color:item.status === 'online'?"green":"red"}]}>{item.status === 'online' ? 'Online' : `Offline - ${item.lastSeen}`}</Text>
        </View>
      </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={FRIENDS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        initialNumToRender={20} // Optimize for performance with large lists
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingVertical: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  status: {
    fontSize: 14,
  },
});

export default FriendsListScreen;
