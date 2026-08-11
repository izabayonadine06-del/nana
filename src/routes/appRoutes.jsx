import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import UserPage from '../pages/UserPage.jsx'
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import Dashboard from '../component/DashboardLayout.jsx';  // <-- ONGERE IYI

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
     <Route path="/" element={<Dashboard />} /> {/* <-- ONGERE IYI */}
      <Route path="/users" element={
        <ProtectedRoutes roles={["admin"]}>
          <UserPage />
        </ProtectedRoutes>
      } />
    </Routes>
  );
}
export default AppRoutes;