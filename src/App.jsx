// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Sign_In from "./Sign_In";
import Home from "./Home";
import Login from "./Components/Login";
import Dashboard from "./Dashboard";
import About from "./About";
import Contact from "./Contact";
import Dashboard2 from "./Components/Doctor/Dashboard2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<Sign_In />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/patient/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
         <Route
          path="/dashboard/doctor/*"
          element={
            <ProtectedRoute>
              <Dashboard2/>
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
