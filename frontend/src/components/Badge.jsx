import React from "react";

const Badge = ({ emoji, label, description, color = "bg-yellow-100 text-yellow-800" }) => {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${color} shadow-sm`}>
      <span className="text-lg">{emoji}</span>
      <div className="text-sm">
        <div className="font-semibold">{label}</div>
        <div className="text-xs text-gray-600">{description}</div>
      </div>
    </div>
  );
};

export default Badge;
