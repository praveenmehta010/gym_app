import axios from "./api"; // Base Axios instance

const POST_BASE = "/posts";

export const fetchAllPosts = () => axios.get(POST_BASE);

export const createPost = (postData) => axios.post(POST_BASE, postData);

export const likePost = (postId, userId) =>
  axios.post(`${POST_BASE}/${postId}/like`, { userId });

export const commentOnPost = (postId, comment) =>
  axios.post(`${POST_BASE}/${postId}/comment`, { comment });

export const deletePost = (postId) => axios.delete(`${POST_BASE}/${postId}`);
