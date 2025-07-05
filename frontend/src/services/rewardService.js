import axios from "./api";

const REWARD_BASE = "/rewards";

// Fetch user reward points and rank
export const getUserRewards = (userId) =>
  axios.get(`${REWARD_BASE}/user/${userId}`);

// Update user points after action (e.g., workout, purchase)
export const addPoints = (userId, points) =>
  axios.post(`${REWARD_BASE}/user/${userId}/add`, { points });

// Fetch reward leaderboard
export const getRewardLeaderboard = () =>
  axios.get(`${REWARD_BASE}/leaderboard`);
