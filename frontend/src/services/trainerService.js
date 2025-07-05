import axios from "axios";

const API_BASE = "https://api.realgym.com"; // Replace with your actual backend URL

// Fetch all trainers
export const getAllTrainers = async () => {
  try {
    const res = await axios.get(`${API_BASE}/trainers`);
    return res.data;
  } catch (err) {
    console.error("Error fetching trainers:", err);
    throw err;
  }
};

// Get single trainer by ID
export const getTrainerById = async (trainerId) => {
  try {
    const res = await axios.get(`${API_BASE}/trainers/${trainerId}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching trainer:", err);
    throw err;
  }
};

// Submit trainer application
export const applyAsTrainer = async (formData, token) => {
  try {
    const res = await axios.post(`${API_BASE}/trainers/apply`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error applying as trainer:", err);
    throw err;
  }
};

// Update trainer profile
export const updateTrainerProfile = async (trainerId, data, token) => {
  try {
    const res = await axios.put(`${API_BASE}/trainers/${trainerId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error updating trainer profile:", err);
    throw err;
  }
};
