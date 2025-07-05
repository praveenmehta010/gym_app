import React from "react";

const MessageBox = ({ message, currentUserId }) => {
  const isSender = message.senderId === currentUserId;

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} my-2`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg shadow 
        ${isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
        <p className="text-sm">{message.text}</p>
        <span className="text-[10px] text-gray-500 block mt-1 text-right">{new Date(message.timestamp).toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default MessageBox;
