export default function Message({ messages }: { messages: { text: string; isUser: boolean }[] }) {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
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
    </>
  );
}