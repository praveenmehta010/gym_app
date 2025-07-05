import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useProgress = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // simulate load time
    return () => clearTimeout(timeout);
  }, [location]);

  return loading;
};

export default useProgress;
