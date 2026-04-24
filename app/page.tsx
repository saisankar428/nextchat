import InputBox from "./components/InputBox";
import Messages from "./components/Messages";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const messages = [
    { text: "Hello! How can I assist you today?", isUser: false },
    { text: "Can you tell me a joke?", isUser: true },
    { text: "Sure! Why don't scientists trust atoms? Because they make up everything!", isUser: false },
  ];
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
       <InputBox/>
      </div>
    </div>
  );
}