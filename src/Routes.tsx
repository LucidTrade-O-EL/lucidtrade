// src/Routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/" element={<SignUp />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;
