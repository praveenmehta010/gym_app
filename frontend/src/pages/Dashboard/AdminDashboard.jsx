import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const userStats = [
  { name: "Jan", users: 120 },
  { name: "Feb", users: 200 },
  { name: "Mar", users: 150 },
  { name: "Apr", users: 220 },
  { name: "May", users: 300 },
  { name: "Jun", users: 280 },
];

const revenueStats = [
  { name: "Jan", revenue: 5000 },
  { name: "Feb", revenue: 7000 },
  { name: "Mar", revenue: 6500 },
  { name: "Apr", revenue: 8200 },
  { name: "May", revenue: 9200 },
  { name: "Jun", revenue: 8800 },
];

const trainerEngagement = [
  { name: "Active", value: 60 },
  { name: "Inactive", value: 40 },
];

const COLORS = ["#00C49F", "#FF8042"];

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-bold">Admin Analytics Dashboard</h2>

      {/* Users Bar Chart */}
      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-2">Monthly Active Users</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Bar Chart */}
      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-2">Monthly Revenue (₹)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Trainer Engagement Pie Chart */}
      <div className="bg-white shadow p-4 rounded max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4">Trainer Engagement</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={trainerEngagement}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {trainerEngagement.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
