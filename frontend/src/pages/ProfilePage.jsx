// 👤 ProfilePage.jsx — User Info with Badges
import React from "react";

const ProfilePage = () => {
  const user = {
    name: "Aryan Dev",
    email: "aryan@example.com",
    role: "User",
    joined: "Jan 2024",
    avatar: "/assets/users/ananya.jpg",
    badges: ["💪 Streak King", "🔥 Diet Master", "🎯 Top 5%"],
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <div className="text-center">
        <img src={user.avatar} alt="User" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <p className="text-blue-600">{user.role}</p>
        <p className="text-sm mt-2 text-gray-400">Joined: {user.joined}</p>
        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          {user.badges.map((badge, i) => (
            <span key={i} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm shadow-sm">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


