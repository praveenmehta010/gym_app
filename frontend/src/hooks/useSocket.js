import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:5000"; // ✅ Replace with your backend URL

const useSocket = (userId, onMessageReceived) => {
  const socketRef = useRef(null);

  useEffect(() => {
    if (!userId) return;

    // Connect socket
    socketRef.current = io(SOCKET_SERVER_URL, {
      query: { userId },
      transports: ["websocket"], // Optional: ensures only WebSocket is used
    });

    // Listen for incoming messages
    socketRef.current.on("receive-message", (message) => {
      onMessageReceived && onMessageReceived(message);
    });

    // Cleanup on unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, [userId, onMessageReceived]);

  // Emit message
  const sendMessage = (receiverId, text) => {
    socketRef.current.emit("send-message", { receiverId, text });
  };

  return {
    socket: socketRef.current,
    sendMessage,
  };
};

export default useSocket;
