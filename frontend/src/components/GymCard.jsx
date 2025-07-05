import React from "react";
import { MapPin, Star } from "lucide-react";

const GymCard = ({ gym }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
      <img
        src={gym.image}
        alt={gym.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{gym.name}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {gym.address}
          </p>
        </div>
        <span className="flex items-center text-yellow-600 text-sm font-medium">
          <Star className="w-4 h-4 mr-1" fill="currentColor" /> {gym.rating}
        </span>
      </div>

      <ul className="text-xs text-gray-600 mt-2 flex flex-wrap gap-2">
        {gym.features.map((f, idx) => (
          <li
            key={idx}
            className="bg-gray-100 px-2 py-1 rounded-full text-[11px] font-medium"
          >
            {f}
          </li>
        ))}
      </ul>

      <button className="mt-4 w-full bg-blue-600 text-white rounded-md py-2 text-sm hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
};

export default GymCard;
