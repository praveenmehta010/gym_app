import React, { useState } from "react";
import { SendHorizonal, Bot, User2 } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm your AI fitness assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    const botReply = { from: "bot", text: "🤖 I'm processing your query..." };

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");

    // Fake AI response delay
    setTimeout(() => {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          from: "bot",
          text: `Here's a fitness tip: Stay hydrated 💧 and warm up properly before workouts.`,
        };
        return updated;
      });
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-[340px] h-[450px] bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden">
      <div className="bg-red-600 text-white p-3 text-sm font-semibold">
        💬 RealGym AI Assistant
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-lg ${
                msg.from === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex p-2 border-t gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about fitness, diet, etc..."
          className="flex-1 px-3 py-2 rounded-md border text-sm"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
        >
          <SendHorizonal size={16} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
