/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",       // Blue for buttons, links
        secondary: "#9333ea",     // Purple accent
        accent: "#10b981",        // Emerald for highlights
        background: "#f9fafb",    // Soft gray
        gymGray: "#e5e7eb",       // Neutral utility color
        danger: "#ef4444",        // Red for errors/alerts
        success: "#22c55e",       // Green for success states
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
