import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { useAuth } from "../context/AuthContext";


const socket = io("http://localhost:5000"); // your backend socket URL

const MessagingPage = () => {
  const { user } = useContext(AuthContext); // assumes user object has _id and role
  const [receiverId, setReceiverId] = useState(""); // ID of trainer or user
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (user) {
      socket.emit("join", user._id);

      socket.on("receiveMessage", (data) => {
        setChat((prev) => [...prev, data]);
      });
    }

    return () => {
      socket.off("receiveMessage");
    };
  }, [user]);

  const sendMessage = () => {
    if (message.trim() && receiverId) {
      const newMessage = {
        sender: user._id,
        receiver: receiverId,
        text: message,
        timestamp: new Date(),
      };
      socket.emit("sendMessage", newMessage);
      setChat((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Chat</h2>

      <input
        type="text"
        placeholder="Enter receiver ID"
        value={receiverId}
        onChange={(e) => setReceiverId(e.target.value)}
        className="mb-4 p-2 border w-full"
      />

      <div className="h-64 overflow-y-scroll bg-white border rounded p-4 mb-4">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === user._id ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-1 rounded-full ${
                msg.sender === user._id ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Type message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border p-2 mr-2 rounded"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessagingPage;
