// 🏋️‍♂️ GymsPage.jsx — Gym Cards with Feature Tags
import React from "react";

const gyms = [
  {
    id: 1,
    name: "Iron Paradise Gym",
    location: "Connaught Place, Delhi",
    features: ["24/7", "CrossFit", "AC", "Locker Room"],
    rating: 4.8,
    image: "/assets/gyms/iron.jpg",
  },
  {
    id: 2,
    name: "Muscle Mansion",
    location: "Sector 21, Noida",
    features: ["Zumba", "Cardio", "Protein Bar"],
    rating: 4.6,
    image: "/assets/gyms/muscle.jpg",
  },
  {
    id: 3,
    name: "The Fit House",
    location: "Rajouri Garden, Delhi",
    features: ["Weight Training", "Steam Room", "WiFi"],
    rating: 4.7,
    image: "/assets/gyms/fit.jpg",
  },
];

const GymsPage = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">💪 Gyms Near You</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gyms.map((gym) => (
          <div
            key={gym.id}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
          >
            <img src={gym.image} alt={gym.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{gym.name}</h3>
              <p className="text-sm text-gray-500">{gym.location}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {gym.features.map((f, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-yellow-500 font-semibold text-sm">⭐ {gym.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymsPage;
