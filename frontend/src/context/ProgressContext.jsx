import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const ProgressContext = createContext();

// 2. Provider Component
export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    workoutsCompleted: 0,
    dietAdherence: 0,
    weeklyGoal: "3 sessions",
    monthlyChallenge: "Burn 2000 cal",
  });

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

// 3. Custom Hook to use Progress Context
export const useProgress = () => useContext(ProgressContext);
