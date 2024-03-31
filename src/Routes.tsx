// src/Routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRoutes;
