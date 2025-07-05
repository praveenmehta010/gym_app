import axios from "axios";

const API_BASE = "https://api.realgym.com"; // Replace with your actual backend

// Get all gyms (optionally nearby)
export const getGymsNearby = async (lat, lon) => {
  try {
    const res = await axios.get(`${API_BASE}/gyms/nearby`, {
      params: { lat, lon },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching nearby gyms:", err);
    throw err;
  }
};

// Get single gym by ID
export const getGymById = async (gymId) => {
  try {
    const res = await axios.get(`${API_BASE}/gyms/${gymId}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching gym:", err);
    throw err;
  }
};

// Register a new gym
export const registerGym = async (gymData, token) => {
  try {
    const res = await axios.post(`${API_BASE}/gyms`, gymData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error registering gym:", err);
    throw err;
  }
};

// Update gym info
export const updateGym = async (gymId, data, token) => {
  try {
    const res = await axios.put(`${API_BASE}/gyms/${gymId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error updating gym:", err);
    throw err;
  }
};

// Get top-rated gyms
export const getTopGyms = async () => {
  try {
    const res = await axios.get(`${API_BASE}/gyms/top`);
    return res.data;
  } catch (err) {
    console.error("Error fetching top gyms:", err);
    throw err;
  }
};

