import { io } from "socket.io-client";

// Base Socket.IO server URL
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || "http://localhost:5000";

// Singleton instance
let socket;

export const connectSocket = (userId) => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      query: { userId }, // Send userId to backend for room assignment
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("🔌 Connected to socket server");
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from socket server");
    });
  }
  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
