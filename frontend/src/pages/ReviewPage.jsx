import React, { useState } from "react";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    target: "trainer",
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.rating && form.comment) {
      setReviews([...reviews, { ...form }]);
      setForm({ target: "trainer", name: "", rating: 0, comment: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Submit a Review</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <select
          value={form.target}
          onChange={(e) => setForm({ ...form, target: e.target.value })}
          className="border rounded p-2 w-full"
        >
          <option value="trainer">Trainer</option>
          <option value="gym">Gym</option>
          <option value="product">Product</option>
        </select>

        <input
          type="text"
          placeholder="Your name"
          className="border rounded p-2 w-full"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          max="5"
          min="1"
          placeholder="Rating (1–5)"
          className="border rounded p-2 w-full"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />

        <textarea
          placeholder="Your feedback"
          className="border rounded p-2 w-full"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Recent Reviews</h3>
      {reviews.map((r, idx) => (
        <div key={idx} className="border rounded p-3 mb-3 bg-white">
          <div className="font-bold">{r.name} - {r.target}</div>
          <div className="text-yellow-500">⭐ {r.rating}</div>
          <p className="text-gray-700">{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
