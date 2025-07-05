// 📈 ReportsPage.jsx — Gym Activity Summary & Insights
import React from "react";

const ReportsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">📊 Progress Reports</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold mb-2">🏋️‍♂️ Workout Summary</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Total Sessions: <span className="font-medium">24</span></li>
            <li>Avg Weekly Attendance: <span className="font-medium">4.2 sessions</span></li>
            <li>Streak: <span className="text-green-600 font-medium">7 days</span></li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold mb-2">🥗 Diet Consistency</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Tracked Meals: <span className="font-medium">58</span></li>
            <li>Consistency Rate: <span className="text-green-600 font-medium">89%</span></li>
            <li>Cheat Days: <span className="text-red-500 font-medium">2</span></li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold mb-2">💬 Trainer Feedback</h3>
          <p className="text-sm text-gray-600">
            "Aryan is doing great! Improving form and stamina. Needs to focus more on hydration."
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold mb-2">📅 Monthly Overview</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Calories Burned: <span className="font-medium">18,500 kcal</span></li>
            <li>Body Fat Drop: <span className="font-medium">2.3%</span></li>
            <li>Muscle Gain: <span className="font-medium">1.8 kg</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;

  
