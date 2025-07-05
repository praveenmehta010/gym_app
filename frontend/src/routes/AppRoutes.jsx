import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import UserLayout from "../layouts/UserLayout";
import TrainerLayout from "../layouts/TrainerLayout";
import AdminLayout from "../layouts/AdminLayout";

// Pages
import HomePage from "../pages/HomePage";
import GymsPage from "../pages/GymsPage";
import TrainerPage from "../pages/TrainerPage";
import Leaderboard from "../pages/Leaderboard";
import DietPage from "../pages/DietPage";
import FeesPage from "../pages/FeesPage";
import PaymentPage from "../pages/PaymentPage";
import ReportsPage from "../pages/ReportsPage";
import ProfilePage from "../pages/ProfilePage";
import ShopPage from "../pages/ShopPage";

// Dashboards
import UserDashboard from "../pages/Dashboard/UserDashboard";
import TrainerDashboard from "../pages/Dashboard/TrainerDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";

// New Feature Pages
import FeedPage from "../pages/FeedPage";
import MessagingPage from "../pages/MessagingPage";
import BookingPage from "../pages/BookingPage";
import ReviewPage from "../pages/ReviewPage";
import RewardsPage from "../pages/RewardsPage";

// Auth
import LoginPage from "../auth/LoginPage";
import SignupPage from "../auth/SignupPage";

// Optional Auth Guards
import { RequireAuth, RequireTrainer, RequireAdmin } from "../auth/authGuard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* User Routes */}
        <Route path="/" element={<UserLayout><HomePage /></UserLayout>} />
        <Route path="/gyms" element={<UserLayout><GymsPage /></UserLayout>} />
        <Route path="/trainers" element={<UserLayout><TrainerPage /></UserLayout>} />
        <Route path="/leaderboard" element={<UserLayout><Leaderboard /></UserLayout>} />
        <Route path="/diet" element={<UserLayout><DietPage /></UserLayout>} />
        <Route path="/fees" element={<UserLayout><FeesPage /></UserLayout>} />
        <Route path="/payment" element={<UserLayout><PaymentPage /></UserLayout>} />
        <Route path="/reports" element={<UserLayout><ReportsPage /></UserLayout>} />
        <Route path="/profile" element={<UserLayout><ProfilePage /></UserLayout>} />
        <Route path="/shop" element={<UserLayout><ShopPage /></UserLayout>} />
        <Route path="/user/dashboard" element={<UserLayout><UserDashboard /></UserLayout>} />

        {/* New Features for User */}
        <Route path="/feed" element={<UserLayout><FeedPage /></UserLayout>} />
        <Route path="/messages" element={<UserLayout><MessagingPage /></UserLayout>} />
        <Route path="/bookings" element={<UserLayout><BookingPage /></UserLayout>} />
        <Route path="/reviews" element={<UserLayout><ReviewPage /></UserLayout>} />
        <Route path="/rewards" element={<UserLayout><RewardsPage /></UserLayout>} />

        {/* Trainer Route */}
        <Route path="/trainer/dashboard" element={<TrainerLayout><TrainerDashboard /></TrainerLayout>} />

        {/* Admin Route */}
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;







