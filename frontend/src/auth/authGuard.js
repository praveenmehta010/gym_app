import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// For general authenticated access
export const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

// For trainer-only access
export const RequireTrainer = ({ children }) => {
  const { isAuthenticated, isTrainer } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!isTrainer) return <Navigate to="/" replace />;

  return children;
};

// For admin-only access
export const RequireAdmin = ({ children }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;

  return children;
};

