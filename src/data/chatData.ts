export interface ChatContact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar?: string;
  initials?: string;
  isGroup?: boolean;
  online?: boolean;
}

export interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isSelf?: boolean;
  avatar?: string;
  reactions?: string[];
  attachment?: { name: string; type: string };
}

export interface FileTypeInfo {
  label: string;
  count: string;
  size: string;
  colorClass: string;
  iconType: "doc" | "photo" | "movie" | "other";
}

export const chatContacts: ChatContact[] = [
  {
    id: 1,
    name: "Real estate deals",
    lastMessage: "Kate, don't be like that and...",
    time: "11:15",
    avatar: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=40&h=40&fit=crop",
    isGroup: true,
  },
  {
    id: 2,
    name: "Kate Johnson",
    lastMessage: "I will send the document s...",
    time: "11:15",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
    online: true,
  },
  {
    id: 3,
    name: "Tamara Shevchenko",
    lastMessage: "are you going to a busine...",
    time: "10:05",
    initials: "TS",
  },
  {
    id: 4,
    name: "Joshua Clarkson",
    lastMessage: "I suggest to start, I have n...",
    time: "15.09",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Jeroen Zoet",
    lastMessage: "We need to start a new re...",
    time: "14.09",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    online: true,
  },
];

export const allMessages: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      sender: "Evan Scott",
      text: "Hi everyone, let's start the call soon 😄",
      time: "11:24 AM",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      sender: "Kate Johnson",
      text: "Recently I saw properties in a great location that I did not pay attention to before 😄",
      time: "11:24 AM",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      sender: "Evan Scott",
      text: "Ooo, why don't you say something more",
      time: "11:25 AM",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 4,
      sender: "Evan Scott",
      text: "@Kate ? 😄",
      time: "11:25 AM",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 5,
      sender: "You",
      text: "She creates an atmosphere of mystery 😏",
      time: "11:26 AM",
      isSelf: true,
      reactions: ["😎", "😄"],
    },
    {
      id: 6,
      sender: "Evan Scott",
      text: "Kate, don't be like that and say something more :) 😄",
      time: "11:34 AM",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 7,
      sender: "Kate Johnson",
      text: "What's in it for me? 😄",
      time: "11:35 AM",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 8,
      sender: "You",
      text: "here's the document 😄",
      time: "11:37 AM",
      isSelf: true,
      attachment: { name: "new_document_2020b.pdf", type: "pdf" },
    },
  ],
  2: [
    {
      id: 1,
      sender: "Kate Johnson",
      text: "Hey, I wanted to discuss the new property listing 🏠",
      time: "10:30 AM",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      sender: "You",
      text: "Sure! Which one are you referring to?",
      time: "10:32 AM",
      isSelf: true,
    },
    {
      id: 3,
      sender: "Kate Johnson",
      text: "The one on Oak Street. I will send the document shortly.",
      time: "11:15 AM",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
    },
  ],
  3: [
    {
      id: 1,
      sender: "Tamara Shevchenko",
      text: "Hi! Are you going to the business conference next week?",
      time: "10:00 AM",
    },
    {
      id: 2,
      sender: "You",
      text: "Yes, I'll be there on Thursday. You?",
      time: "10:03 AM",
      isSelf: true,
    },
    {
      id: 3,
      sender: "Tamara Shevchenko",
      text: "Same! Let's meet up at the networking session 🤝",
      time: "10:05 AM",
    },
  ],
  4: [
    {
      id: 1,
      sender: "Joshua Clarkson",
      text: "I suggest to start with the market analysis first",
      time: "15:05",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      sender: "You",
      text: "Good idea. I have some data we can use.",
      time: "15:07",
      isSelf: true,
    },
    {
      id: 3,
      sender: "Joshua Clarkson",
      text: "Perfect, I have notes from the last quarter too 📊",
      time: "15:09",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
  ],
  5: [
    {
      id: 1,
      sender: "Jeroen Zoet",
      text: "We need to start a new research project for Q2",
      time: "14:00",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      sender: "You",
      text: "I'm on board. What's the scope?",
      time: "14:05",
      isSelf: true,
    },
    {
      id: 3,
      sender: "Jeroen Zoet",
      text: "Mainly the downtown area developments. I'll share more details soon.",
      time: "14:09",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
  ],
};
