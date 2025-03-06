import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage";
import AdminDashboard from "./Pages/AdminPage/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} /> {/* ✅ Fixed Route Path */}
      </Routes>
    </Router>
  );
}

export default App;
