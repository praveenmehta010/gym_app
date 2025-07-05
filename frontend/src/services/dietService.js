import axios from "axios";

const API_BASE = "https://api.realgym.com"; // Replace with your backend base URL

// Fetch user diet plan
export const getUserDietPlan = async (userId, token) => {
  try {
    const res = await axios.get(`${API_BASE}/diet/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching diet plan:", err);
    throw err;
  }
};

// Update diet tracking (e.g. mark meals as eaten)
export const updateMealLog = async (userId, mealData, token) => {
  try {
    const res = await axios.post(`${API_BASE}/diet/log/${userId}`, mealData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error updating meal log:", err);
    throw err;
  }
};

// Get weekly adherence %
export const getDietAdherence = async (userId, token) => {
  try {
    const res = await axios.get(`${API_BASE}/diet/adherence/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching adherence:", err);
    throw err;
  }
};

// Admin or trainer: assign diet to user
export const assignDietPlan = async (userId, planData, token) => {
  try {
    const res = await axios.post(`${API_BASE}/diet/assign/${userId}`, planData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error assigning diet:", err);
    throw err;
  }
};
