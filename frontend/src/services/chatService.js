import axios from "axios";

const API_BASE = "https://api.realgym.com"; // Replace with your backend or proxy server

// Send user message to AI bot and get response
export const sendMessageToBot = async (message, userId, token) => {
  try {
    const res = await axios.post(
      `${API_BASE}/chatbot/message`,
      { message, userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.reply; // Expected: { reply: "AI response here" }
  } catch (err) {
    console.error("Chatbot error:", err);
    throw err;
  }
};
