import React from "react";

const TrainerCard = ({ trainer }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition duration-300">
      <div className="flex items-center gap-4">
        <img
          src={trainer.avatar}
          alt={trainer.name}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h3 className="text-lg font-semibold">{trainer.name}</h3>
          <p className="text-sm text-gray-500">{trainer.specialty}</p>
          <p className="text-sm text-gray-400">{trainer.experience} experience</p>
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <span className="text-yellow-600 text-sm font-medium">⭐ {trainer.rating}</span>
        <span className="text-xs text-gray-500">{trainer.location}</span>
      </div>

      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white rounded-md py-2 text-sm hover:bg-blue-700 transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default TrainerCard;
