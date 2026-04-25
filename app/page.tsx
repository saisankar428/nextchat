'use client'

import InputBox from "./components/InputBox";
import Messages from "./components/Messages";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const API_URL = 'http://127.0.0.1:8000/chat';
const API_HEADERS = {
  'Content-Type': 'application/json',
};

export default function Home() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isUser: false }
  ]);

  const addMessage = async (text: string, isUser: boolean) => {
    const newMessages = [...messages, { text, isUser }];
    setMessages(newMessages);

    if (isUser) {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: API_HEADERS,
          body: JSON.stringify({ message: newMessages.map(m => m.text) })
        });
        const data = await response.json();
        setMessages(prev => [...prev, { text: data.response, isUser: false }]);
      } catch (error) {
        console.error('Error fetching response:', error);
        setMessages(prev => [...prev, { text: 'Sorry, something went wrong.', isUser: false }]);
      }
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
     <Sidebar />

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="flex-1 overflow-hidden">
<Messages messages={messages}/>
</div>
        {/* Input Box */}
       <InputBox submit={(text) => addMessage(text, true)}/>
      </div>
    </div>
  );
}