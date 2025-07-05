// 🥗 DietPage.jsx — Daily Meal Tracker + Stats
import React, { useState } from "react";

const sampleDiet = [
  { meal: "Breakfast", items: ["Oats", "Banana", "Almonds"] },
  { meal: "Lunch", items: ["Grilled Chicken", "Brown Rice", "Salad"] },
  { meal: "Dinner", items: ["Paneer", "Quinoa", "Broccoli"] },
];

const DietPage = () => {
  const [completed, setCompleted] = useState([]);

  const toggleMeal = (meal) => {
    setCompleted((prev) =>
      prev.includes(meal) ? prev.filter((m) => m !== meal) : [...prev, meal]
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🍽️ Your Diet Plan</h2>
      <div className="space-y-4">
        {sampleDiet.map((diet, i) => (
          <div
            key={i}
            className={`glass-card p-4 border-l-4 ${
              completed.includes(diet.meal) ? "border-green-500 bg-green-50" : "border-blue-500"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{diet.meal}</h3>
              <button
                onClick={() => toggleMeal(diet.meal)}
                className={`text-sm font-medium px-3 py-1 rounded ${
                  completed.includes(diet.meal)
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {completed.includes(diet.meal) ? "Done" : "Mark as Done"}
              </button>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {diet.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        {completed.length === sampleDiet.length
          ? "🎉 You completed all meals today!"
          : `✅ ${completed.length} of ${sampleDiet.length} meals completed`}
      </div>
    </div>
  );
};

export default DietPage;
