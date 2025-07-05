import axios from "axios";

// Set your backend API base URL
const API_BASE = "https://api.realgym.com"; // Replace with your actual backend URL

// Create Axios instance
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

// Automatically include token (if exists)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: global error handling
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn("Unauthorized — redirecting to login...");
      // Optionally redirect or trigger logout here
    }
    return Promise.reject(err);
  }
);

export default api;

