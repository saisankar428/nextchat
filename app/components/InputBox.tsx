'use client';

import { useState } from 'react';

export default function InputBox({ submit }: { submit: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    submit(trimmed);
    setText('');
  };

  return (
    <div className="p-4 border-t bg-white flex gap-2">
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
}