'use client';

import { useEffect, useRef, useState } from "react";

export default function Message({ messages }: { messages: { text: string; isUser: boolean }[] }) {
  
   const [showButton, setShowButton] = useState(false);
   const containerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const prevMessagesLength = useRef(messages.length);

  const scrollToBottom = () => {
    const container = containerRef.current;
    if (!container) return;

    endRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowButton(false);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

    if (isAtBottom) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      const container = containerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;

      if (isAtBottom) {
        scrollToBottom();
      } else {
        setShowButton(true);
      }
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);


  return (
    <div ref={containerRef} onScroll={handleScroll} className="h-full overflow-y-auto relative bg-white">
      {messages.map((message, index) => (
        <div 
        key={index} 
        className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
          <div
            className={`px-4 py-2 mt-2 rounded-2xl max-w-md ${
              message.isUser
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
       <div ref={endRef} />
        {showButton && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
        >
          <span>↓</span> New Messages Below
        </button>
      )}
    </div>
  );
}