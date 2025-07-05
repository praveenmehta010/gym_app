import React, { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { LocationProvider } from "./context/LocationContext";
import { ProgressProvider } from "./context/ProgressContext";

// Lottie animation
import Lottie from "lottie-react";
import introAnimation from "./assets/animations/intro.json";

// Global styles
import "leaflet/dist/leaflet.css";
import "./index.css"; // Tailwind & custom styles

// Optional: Toast notifications
import { Toaster } from "react-hot-toast";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <LocationProvider>
        <CartProvider>
          <ProgressProvider>
            <Toaster position="top-right" />
            {showIntro ? (
              <div className="w-screen h-screen flex items-center justify-center bg-black">
                <Lottie animationData={introAnimation} className="w-64 h-64" />
              </div>
            ) : (
              <AppRoutes />
            )}
          </ProgressProvider>
        </CartProvider>
      </LocationProvider>
    </AuthProvider>
  );
};

export default App;



