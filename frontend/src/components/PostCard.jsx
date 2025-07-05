import React from "react";

const PostCard = ({ post, onLike }) => {
  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <div className="flex items-center gap-2 mb-2">
        <img src={post.userAvatar} alt="avatar" className="w-8 h-8 rounded-full" />
        <div>
          <h4 className="font-semibold">{post.username}</h4>
          <span className="text-xs text-gray-500">{new Date(post.timestamp).toLocaleString()}</span>
        </div>
      </div>
      <p className="mb-2">{post.text}</p>
      {post.image && <img src={post.image} alt="post" className="w-full rounded mb-2" />}
      <div className="text-sm text-gray-600 flex justify-between">
        <button onClick={onLike} className="hover:text-blue-500">❤️ {post.likes}</button>
        <span>{post.comments.length} comments</span>
      </div>
    </div>
  );
};

export default PostCard;
