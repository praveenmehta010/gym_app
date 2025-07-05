import axios from "./api"; // Base Axios instance

const REVIEW_BASE = "/reviews";

// Add a review (gym/trainer/product)
export const addReview = (targetId, review) =>
  axios.post(`${REVIEW_BASE}/${targetId}`, review);

// Get all reviews for a gym/trainer/product
export const getReviews = (targetId) =>
  axios.get(`${REVIEW_BASE}/${targetId}`);

// Get average rating
export const getRatingStats = (targetId) =>
  axios.get(`${REVIEW_BASE}/${targetId}/stats`);
