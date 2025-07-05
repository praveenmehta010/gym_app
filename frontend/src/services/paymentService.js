import axios from "axios";

const API_BASE = "https://api.realgym.com"; // Replace with your actual backend URL

// Fetch all payments for a user
export const getUserPayments = async (userId, token) => {
  try {
    const res = await axios.get(`${API_BASE}/payments/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching payments:", err);
    throw err;
  }
};

// Make a payment (e.g., for gym fees)
export const makePayment = async (paymentData, token) => {
  try {
    const res = await axios.post(`${API_BASE}/payments`, paymentData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Payment failed:", err);
    throw err;
  }
};

// Get overdue payment alerts
export const getLatePaymentAlerts = async (userId, token) => {
  try {
    const res = await axios.get(`${API_BASE}/payments/alerts/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching late alerts:", err);
    throw err;
  }
};

// Admin: get all payments
export const getAllPayments = async (token) => {
  try {
    const res = await axios.get(`${API_BASE}/payments`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching all payments:", err);
    throw err;
  }
};
