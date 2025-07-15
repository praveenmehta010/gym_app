// 🛍️ ShopPage.jsx — Product Grid with Filters
import React, { useEffect, useState } from "react";
import axios from "axios";

const ShopPage = () => {
  //Get the trainer data from Database
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3100/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("❌ Error fetching gyms:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Shop Gym Essentials</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden card-hover"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
              <button className="mt-2 btn-primary w-full">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

