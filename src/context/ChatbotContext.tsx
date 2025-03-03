import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatbotContextType {
  apiKey: string | undefined;
  setApiKey: (key: string) => void;
  userInfo: {
    name: string;
    age: string;
    gender: string;
    nativePlace: string;
    phoneNumber: string;
    email: string;
    eventType: string;
    guestCount: string;
    date: string;
  };
  setUserInfo: (info: any) => void;
  infoCollected: boolean;
  setInfoCollected: (collected: boolean) => void;
}

const defaultUserInfo = {
  name: '',
  age: '',
  gender: '',
  nativePlace: '',
  phoneNumber: '',
  email: '',
  eventType: '',
  guestCount: '',
  date: '',
};

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

interface ChatbotProviderProps {
  children: ReactNode;
}

export function ChatbotProvider({ children }: ChatbotProviderProps) {
  const [apiKey, setApiKey] = useState<string | undefined>("AIzaSyDupk0srcxaypHM9D5rMkBuUgeoX24oYmk");
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const [infoCollected, setInfoCollected] = useState(false);

  return (
    <ChatbotContext.Provider value={{ 
      apiKey, 
      setApiKey, 
      userInfo, 
      setUserInfo, 
      infoCollected, 
      setInfoCollected 
    }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}