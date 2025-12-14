// types.ts
export interface Friend {
  id: number;
  name: string;
  avatarUrl: string;
  status: 'online' | 'offline' | 'away';
  lastSeen: string;
}

// A large array of friends
export const FRIENDS: Friend[] = [
  { id: 1, name: 'Alice Johnson', avatarUrl: 'i.pravatar.cc', status: 'online', lastSeen: 'Just now' },
  { id: 2, name: 'Bob Smith', avatarUrl: 'i.pravatar.cc', status: 'offline', lastSeen: '1 hour ago' },
  { id: 3, name: 'Charlie Brown', avatarUrl: 'i.pravatar.cc', status: 'away', lastSeen: '30 minutes ago' },
  { id: 4, name: 'Diana Prince', avatarUrl: 'i.pravatar.cc', status: 'online', lastSeen: 'Just now' },
  { id: 5, name: 'Ethan Hunt', avatarUrl: 'i.pravatar.cc', status: 'offline', lastSeen: '2 days ago' },
  { id: 6, name: 'Fiona Glenanne', avatarUrl: 'i.pravatar.cc', status: 'online', lastSeen: '10 minutes ago' },
  { id: 7, name: 'George Jetson', avatarUrl: 'i.pravatar.cc', status: 'away', lastSeen: '5 minutes ago' },
  { id: 8, name: 'Hannah Montana', avatarUrl: 'i.pravatar.cc', status: 'online', lastSeen: 'Just now' },
  { id: 9, name: 'Ian Malcolm', avatarUrl: 'i.pravatar.cc', status: 'offline', lastSeen: '1 month ago' },
  { id: 10, name: 'Jenna Marbles', avatarUrl: 'i.pravatar.cc0', status: 'online', lastSeen: '2 hours ago' },
];
// ... add hundreds more friends here for a large array ...
