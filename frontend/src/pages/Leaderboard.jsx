import React from "react";
import leaderboard from "../data/leaderboard";

const Leaderboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🏆 Top Performers</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {leaderboard.map((user, i) => (
          <div key={user.userId} className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
              <span className="font-medium">{i + 1}. {user.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">{user.score} pts</span>
              <div>{user.badges.map((b, i) => <span key={i}>{b}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
