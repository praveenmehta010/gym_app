import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import introAnimation from "../assets/animations/intro.json"; // Place your Lottie JSON here

const IntroAnimation = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); // animation duration
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="w-72 h-72">
        <Lottie animationData={introAnimation} loop={false} autoplay />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700 animate-pulse">
        Welcome to RealGym 💪
      </h2>
    </div>
  );
};

export default IntroAnimation;

