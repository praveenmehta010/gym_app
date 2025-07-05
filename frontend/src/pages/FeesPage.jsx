// 💰 FeesPage.jsx — Fee Status + Alerts
import React from "react";

const fees = [
  { id: 1, gym: "Iron Paradise Gym", dueDate: "2025-07-05", status: "Paid" },
  { id: 2, gym: "Muscle Mansion", dueDate: "2025-06-05", status: "Overdue" },
  { id: 3, gym: "The Fit House", dueDate: "2025-07-05", status: "Pending" },
];

const FeesPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">📅 Gym Fees & Alerts</h2>
      <div className="space-y-4">
        {fees.map((fee) => (
          <div
            key={fee.id}
            className={`p-4 rounded-xl shadow flex justify-between items-center ${
              fee.status === "Paid"
                ? "bg-green-50 border border-green-200"
                : fee.status === "Pending"
                ? "bg-yellow-50 border border-yellow-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <div>
              <h3 className="font-semibold text-lg">{fee.gym}</h3>
              <p className="text-sm text-gray-500">Due: {fee.dueDate}</p>
            </div>
            <span
              className={`text-sm font-bold px-3 py-1 rounded-full ${
                fee.status === "Paid"
                  ? "bg-green-200 text-green-800"
                  : fee.status === "Pending"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {fee.status}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">
        🔔 Late payments beyond the 10th of each month will incur extra charges.
      </p>
    </div>
  );
};

export default FeesPage;
