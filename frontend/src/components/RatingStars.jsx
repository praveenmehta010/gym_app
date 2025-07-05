import React from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating, onRate }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer transition text-xl ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => onRate(star)}
        />
      ))}
    </div>
  );
};

export default RatingStars;
