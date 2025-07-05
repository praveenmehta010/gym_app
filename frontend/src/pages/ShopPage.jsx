// 🛍️ ShopPage.jsx — Product Grid with Filters
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Whey Protein",
    price: 1499,
    image: "/assets/shop/whey.jpg",
    category: "supplements",
  },
  {
    id: 2,
    name: "Resistance Bands",
    price: 699,
    image: "/assets/shop/bands.jpg",
    category: "equipment",
  },
  {
    id: 3,
    name: "Gym T-Shirt",
    price: 499,
    image: "/assets/shop/shirt.jpg",
    category: "apparel",
  },
  {
    id: 4,
    name: "Creatine",
    price: 899,
    image: "/assets/shop/creatine.jpg",
    category: "supplements",
  },
];

const ShopPage = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Shop Gym Essentials</h2>

      <div className="flex gap-2 mb-6">
        {[
          { label: "All", value: "all" },
          { label: "Supplements", value: "supplements" },
          { label: "Equipment", value: "equipment" },
          { label: "Apparel", value: "apparel" },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-1 rounded-full border text-sm font-medium ${
              filter === value
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden card-hover"
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">₹{item.price}</p>
              <button className="mt-2 btn-primary w-full">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

