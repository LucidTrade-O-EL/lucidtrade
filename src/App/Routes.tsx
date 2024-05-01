// src/Routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/Signup";
import SetPassword from "../screens/Password/SetPassword/SetPassword";
import PasswordResetComplete from "../screens/Password/PasswordResetComplete/PasswordResetComplete";
import ForgotPassword from "../screens/Password/ForgetPassword/ForgotPassword";


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/reset-complete" element={<PasswordResetComplete />} />
    </Routes>
  </Router>
);

export default AppRoutes;
