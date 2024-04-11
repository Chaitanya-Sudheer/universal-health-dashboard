// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // Adjust the import path as necessary
import Sign_In from "./Sign_In"; // Adjust the import path as necessary
import Home from "./Home"; // Adjust the import path as necessary
import Login from "./Components/Login"; // Adjust the import path as necessary
import Dashboard from "./Dashboard"; // Adjust the import path as necessary
import About from "./About"; // Adjust the import path as necessary
import Contact from "./Contact"; // Adjust the import path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<Sign_In />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
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
