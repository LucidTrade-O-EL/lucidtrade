// src/Routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import PasswordRest from "./PasswordRest";
import SignUp from "./Signup";
import Verify from "./Verify";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Verify />} />
      {/* <Route path="/" element={<PasswordRest />} /> */}
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/" element={<SignUp />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;
