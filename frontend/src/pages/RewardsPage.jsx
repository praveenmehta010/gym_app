import React from "react";

const user = {
  name: "Aryan",
  points: 620,
};

const tiers = [
  { name: "Bronze", min: 0 },
  { name: "Silver", min: 300 },
  { name: "Gold", min: 600 },
  { name: "Platinum", min: 1000 },
];

const getTier = (points) => {
  return tiers
    .slice()
    .reverse()
    .find((tier) => points >= tier.min)?.name || "Unranked";
};

const RewardsPage = () => {
  const rank = getTier(user.points);

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Loyalty Rewards</h2>

      <div className="bg-white shadow p-4 rounded mb-4">
        <h3 className="text-xl font-semibold">Hi {user.name} 👋</h3>
        <p className="mt-2 text-gray-700">
          You have <span className="font-bold text-green-600">{user.points}</span> points.
        </p>
        <p>
          Your current rank is: <span className="font-bold text-blue-600">{rank}</span>
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Ranks:</h4>
        <ul className="space-y-1">
          {tiers.map((tier) => (
            <li key={tier.name}>
              {tier.name}: {tier.min}+ pts
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RewardsPage;
