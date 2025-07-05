import React, { useState, useEffect, useContext } from "react";
import { useAuth } from "../context/AuthContext";

import { v4 as uuidv4 } from "uuid";

const FeedPage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");

  const handlePost = () => {
    if (newPostText.trim()) {
      const newPost = {
        id: uuidv4(),
        user: user.name || "Anonymous",
        text: newPostText,
        timestamp: new Date().toISOString(),
        likes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostText("");
    }
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id, commentText) => {
    if (!commentText.trim()) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [
                ...post.comments,
                { user: user.name || "Anonymous", text: commentText },
              ],
            }
          : post
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Feed</h2>

      <div className="mb-6">
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="Share something with your gym friends..."
          className="w-full p-3 border rounded mb-2"
        />
        <button
          onClick={handlePost}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Post
        </button>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 border rounded mb-4">
          <div className="font-semibold">{post.user}</div>
          <div className="text-sm text-gray-500 mb-2">
            {new Date(post.timestamp).toLocaleString()}
          </div>
          <p className="mb-3">{post.text}</p>
          <div className="flex gap-4 items-center mb-2">
            <button
              onClick={() => handleLike(post.id)}
              className="text-blue-600"
            >
              👍 {post.likes}
            </button>
          </div>

          <div className="mt-2">
            <strong>Comments:</strong>
            {post.comments.map((comment, idx) => (
              <div key={idx} className="ml-2 text-sm text-gray-700">
                <strong>{comment.user}:</strong> {comment.text}
              </div>
            ))}

            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Write a comment"
                onKeyDown={(e) =>
                  e.key === "Enter" && handleComment(post.id, e.target.value)
                }
                className="flex-1 border p-1 text-sm rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedPage;
