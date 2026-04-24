'use client'

import InputBox from "./components/InputBox";
import Messages from "./components/Messages";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

  const staticMessages = [
    { text: "Hello! How can I assist you today?", isUser: false },
    { text: "Can you tell me a joke?", isUser: true },
    { text: "Sure! Why don't scientists trust atoms? Because they make up everything!", isUser: false },
  ];

export default function Home() {
  const [messages, setMessages] = useState(staticMessages)

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [...prev, { text, isUser }])
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
     <Sidebar />

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="flex-1">
<Messages messages={messages}/>
</div>
        {/* Input Box */}
       <InputBox submit={(text) => addMessage(text, true)}/>
      </div>
    </div>
  );
}