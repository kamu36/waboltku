export const dummyChats = [
  {
    id: "1",
    name: "Alice Johnson",
    lastMessage: "Hey, how's it going?",
    timestamp: "2024-01-20T10:30:00Z",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    online: true,
  },
  {
    id: "2",
    name: "Bob Smith",
    lastMessage: "Did you see the latest updates?",
    timestamp: "2024-01-20T09:45:00Z",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
    online: false,
  },
  // Add 8 more dummy chats here
];

export const dummyStatuses = [
  {
    id: "1",
    userId: "1",
    userName: "Alice Johnson",
    content: "Having a great day! ☀️",
    image: "https://images.unsplash.com/photo-1705835254007-628c4d924e23?q=80&w=2940&auto=format&fit=crop",
    timestamp: "2024-01-20T11:00:00Z",
    likes: 15,
    comments: [
      {
        id: "1",
        userId: "2",
        userName: "Bob Smith",
        content: "Looks amazing!",
        timestamp: "2024-01-20T11:05:00Z",
      },
    ],
  },
  // Add more dummy statuses here
];

export const dummyFriends = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    online: true,
  },
  {
    id: "2",
    name: "Bob Smith",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
    online: false,
  },
  // Add more dummy friends here
];