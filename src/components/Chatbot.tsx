import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UserInfo {
  name: string;
  age: string;
  gender: string;
  nativePlace: string;
  phoneNumber: string;
  email: string;
  eventType: string;
  guestCount: string;
  date: string;
}

interface ChatbotProps {
  apiKey?: string;
}

export default function Chatbot({ apiKey }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi, I'm Chitti. Hope you are having a pleasant day. I am excited to start a conversation with you. So, how can I help you today.",
      sender: 'bot',
      timestamp: new Date(),
    },
    {
      id: '2',
      text: "Before we begin, I'd like to get to know you better. Could you please share your name?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // User information collection state
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    age: '',
    gender: '',
    nativePlace: '',
    phoneNumber: '',
    email: '',
    eventType: '',
    guestCount: '',
    date: '',
  });
  const [currentQuestion, setCurrentQuestion] = useState<keyof UserInfo>('name');
  const [infoCollected, setInfoCollected] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Function to process user information collection
  const processUserInfoCollection = (userInput: string) => {
    // Update the current field
    setUserInfo(prev => ({
      ...prev,
      [currentQuestion]: userInput
    }));

    let nextQuestion: keyof UserInfo | null = null;
    let responseText = '';

    // Determine next question based on current question
    switch (currentQuestion) {
      case 'name':
        nextQuestion = 'age';
        responseText = `Nice to meet you, ${userInput}! Could you please tell me your age?`;
        break;
      case 'age':
        nextQuestion = 'gender';
        responseText = `Thank you! Could you please share your gender?`;
        break;
      case 'gender':
        nextQuestion = 'nativePlace';
        responseText = `Great! Where are you from (your native place)?`;
        break;
      case 'nativePlace':
        nextQuestion = 'phoneNumber';
        responseText = `Wonderful! Could you please provide your phone number so we can contact you if needed?`;
        break;
      case 'phoneNumber':
        nextQuestion = 'email';
        responseText = `Thank you! Could you please provide your email address?`;
        break;
      case 'email':
        nextQuestion = 'eventType';
        responseText = `Perfect! Now, what type of event are you planning? (e.g., Wedding, Corporate Event, Birthday Party, etc.)`;
        break;
      case 'eventType':
        nextQuestion = 'guestCount';
        responseText = `Great! We have extensive experience with ${userInput} events. Approximately how many guests are you expecting?`;
        break;
      case 'guestCount':
        nextQuestion = 'date';
        responseText = `Thank you! Do you have a specific date or timeframe in mind for your event?`;
        break;
      case 'date':
        nextQuestion = null; // No more questions
        responseText = `Thank you for providing your information, ${userInfo.name}! Based on your ${userInfo.eventType} event for approximately ${userInfo.guestCount} guests planned for ${userInput}, I'd be happy to help you with any specific questions or requirements you have. How can Chitti assist you today?`;
        setInfoCollected(true);
        break;
    }

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    }

    return responseText;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let botResponse = '';
      
      // If still collecting user information
      if (!infoCollected) {
        botResponse = processUserInfoCollection(message);
      } else if (apiKey) {
        // Check if user is calling Chitti by name
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes('chitti')) {
          botResponse = `Yes, ${userInfo.name}! Chitti is here to help you with your ${userInfo.eventType} planning. What would you like to know?`;
        } 
        // Here you would typically make an API call using the provided API key
        // For demonstration, we'll simulate a response based on the collected user info
        else if (lowerCaseMessage.includes('budget') || lowerCaseMessage.includes('cost')) {
          botResponse = `Based on your ${userInfo.eventType} event with ${userInfo.guestCount} guests, we can provide customized packages. Would you like our team to prepare a detailed quote for you, ${userInfo.name}?`;
        } else if (lowerCaseMessage.includes('venue') || lowerCaseMessage.includes('location')) {
          botResponse = `For your ${userInfo.eventType} event, we have several venue recommendations that would accommodate ${userInfo.guestCount} guests. Would you like to schedule a venue tour, ${userInfo.name}?`;
        } else if (lowerCaseMessage.includes('food') || lowerCaseMessage.includes('catering')) {
          botResponse = `We work with top-rated caterers who can provide excellent menu options for your ${userInfo.eventType}. Would you like to discuss specific dietary requirements or cuisine preferences, ${userInfo.name}?`;
        } else if (lowerCaseMessage.includes('thank')) {
          botResponse = `You're welcome, ${userInfo.name}! Chitti is excited to help make your ${userInfo.eventType} a success. Our team will follow up with you at ${userInfo.email} with more information.`;
        } else {
          botResponse = `Thank you for your question, ${userInfo.name}. Chitti and our event planning team would be happy to discuss this further for your ${userInfo.eventType} on ${userInfo.date}. Would you like us to schedule a consultation call?`;
        }
      } else {
        // Fallback responses if API key is not available
        const lowerCaseMessage = message.toLowerCase();
        
        if (lowerCaseMessage.includes('chitti')) {
          botResponse = `Yes, ${userInfo.name}! I'm Chitti, your event planning assistant. How can I help you today?`;
        } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
          botResponse = `Hello ${userInfo.name}! Chitti here. How can I assist you with your ${userInfo.eventType} planning today?`;
        } else if (lowerCaseMessage.includes('wedding')) {
          botResponse = `Our wedding planning services include ceremony planning, reception design, vendor coordination, and timeline management. Would you like more information, ${userInfo.name}?`;
        } else if (lowerCaseMessage.includes('corporate') || lowerCaseMessage.includes('business')) {
          botResponse = `We offer comprehensive corporate event planning including conferences, team building activities, product launches, and award ceremonies. How can Chitti help with your business event, ${userInfo.name}?`;
        } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('quote')) {
          botResponse = `Our pricing varies based on the type and scale of your event. For a ${userInfo.eventType} with ${userInfo.guestCount} guests, we can provide a customized quote. Would you like to schedule a consultation, ${userInfo.name}?`;
        } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('speak') || lowerCaseMessage.includes('call')) {
          botResponse = `We'll have someone contact you at ${userInfo.phoneNumber} or ${userInfo.email} to discuss your ${userInfo.eventType} in more detail. Is there a specific time that works best for you, ${userInfo.name}?`;
        } else {
          botResponse = `Thank you for your message, ${userInfo.name}. Chitti and our event planning team would be happy to help you create a memorable ${userInfo.eventType}. Would you like more information about any specific service?`;
        }
      }
      
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again later.',
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 sm:w-96 overflow-hidden border border-gray-200">
          {/* Chat header */}
          <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chitti - Event4All Assistant</h3>
            <div className="flex space-x-2">
              <button onClick={toggleMinimize} className="hover:text-gray-200">
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button onClick={toggleChat} className="hover:text-gray-200">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat body */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          msg.sender === 'user'
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-gray-800 rounded-lg p-3 max-w-[80%]">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Chat input */}
              <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={!infoCollected ? `Please enter your ${currentQuestion}...` : "Type your message..."}
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}