// 💳 PaymentPage.jsx — Gym Fee History & Status
import React from "react";

const payments = [
  {
    id: 1,
    month: "July 2025",
    amount: 1200,
    status: "Paid",
    date: "2025-07-01",
  },
  {
    id: 2,
    month: "June 2025",
    amount: 1200,
    status: "Late",
    date: "2025-06-10",
  },
  {
    id: 3,
    month: "May 2025",
    amount: 1200,
    status: "Paid",
    date: "2025-05-01",
  },
];

const PaymentPage = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">💸 Payment History</h2>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">Month</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {payments.map((p) => (
              <tr key={p.id}>
                <td className="px-4 py-3 font-medium">{p.month}</td>
                <td className="px-4 py-3">₹{p.amount}</td>
                <td
                  className={`px-4 py-3 font-semibold ${
                    p.status === "Paid" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {p.status}
                </td>
                <td className="px-4 py-3 text-gray-500">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p className="text-yellow-600">⚠️ Please clear pending payments before the 5th of every month.</p>
      </div>
    </div>
  );
};

export default PaymentPage;

