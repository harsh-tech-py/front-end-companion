import React, { createContext, useContext, useState, useCallback } from "react";
import { ChatContact, Message, chatContacts, allMessages } from "@/data/chatData";

interface ChatContextType {
  contacts: ChatContact[];
  activeContactId: number;
  messages: Message[];
  activeTab: "messages" | "participants";
  searchQuery: string;
  setActiveContactId: (id: number) => void;
  setActiveTab: (tab: "messages" | "participants") => void;
  setSearchQuery: (q: string) => void;
  sendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChatContext must be used within ChatProvider");
  return ctx;
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [contacts, setContacts] = useState<ChatContact[]>(chatContacts);
  const [activeContactId, setActiveContactId] = useState(1);
  const [messagesMap, setMessagesMap] = useState<Record<number, Message[]>>(allMessages);
  const [activeTab, setActiveTab] = useState<"messages" | "participants">("messages");
  const [searchQuery, setSearchQuery] = useState("");

  const messages = messagesMap[activeContactId] || [];

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
      const newMsg: Message = {
        id: Date.now(),
        sender: "You",
        text,
        time,
        isSelf: true,
      };
      setMessagesMap((prev) => ({
        ...prev,
        [activeContactId]: [...(prev[activeContactId] || []), newMsg],
      }));
      // Update last message in contacts
      setContacts((prev) =>
        prev.map((c) =>
          c.id === activeContactId
            ? { ...c, lastMessage: text.length > 28 ? text.slice(0, 28) + "..." : text, time: time }
            : c
        )
      );
    },
    [activeContactId]
  );

  return (
    <ChatContext.Provider
      value={{
        contacts,
        activeContactId,
        messages,
        activeTab,
        searchQuery,
        setActiveContactId,
        setActiveTab,
        setSearchQuery,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
