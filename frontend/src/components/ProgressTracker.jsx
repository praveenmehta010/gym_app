import React from "react";
import { useProgress } from "../context/ProgressContext";

const ProgressTracker = () => {
  const { progress } = useProgress();

  const progressBar = (label, value, color = "blue") => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full bg-${color}-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold mb-4">📊 Progress Tracker</h2>

      {progressBar("Workout Streak", progress.workoutStreak * 10, "green")}
      {progressBar("Diet Consistency", progress.dietConsistency, "yellow")}
      {progressBar("Badges Collected", (progress.totalBadges / 6) * 100, "purple")}
      {progressBar("Level", progress.level * 20, "blue")}
    </div>
  );
};

export default ProgressTracker;
