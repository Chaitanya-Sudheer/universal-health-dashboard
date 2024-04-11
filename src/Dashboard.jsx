// Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview"; // Adjust the import path as necessary
import Profile from "./Components/Profile"; // Adjust the import path as necessary
import Prescription from "./Components/Prescription"; // Adjust the import path as necessary
import Records from "./Components/Records"; // Adjust the import path as necessary
import Medicines from "./Components/Medicines"; // Adjust the import path as necessary
import Appointments from "./Components/Appointments"; // Adjust the import path as necessary
import Treatment_history from "./Components/Treatment_history"; // Adjust the import path as necessary
import Medical_directives from "./Components/Medical_directives"; // Adjust the import path as necessary
import Vaccination_history from "./Components/Vaccination_history"; // Adjust the import path as necessary
import Allergies from "./Components/Allergies"; // Adjust the import path as necessary
import Fam_Med_History from "./Components/Fam_Med_History"; // Adjust the import path as necessary
import Social_history from "./Components/Social_history"; // Adjust the import path as necessary

const Dashboard = () => {
  let navigate = useNavigate();

  // Navigation functions can be defined here if needed

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      {/* Sidemenu and other dashboard-specific UI elements */}
      <div className="Sidemenu p-10 bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96% text-black rounded-md">
        {/* Sidemenu content */}
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="prescription" element={<Prescription />} />
          <Route path="records" element={<Records />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="treatment_history" element={<Treatment_history />} />
          <Route path="medical_directives" element={<Medical_directives />} />
          <Route path="vaccination_history" element={<Vaccination_history />} />
          <Route path="allergies" element={<Allergies />} />
          <Route path="fam_med_history" element={<Fam_Med_History />} />
          <Route path="social_history" element={<Social_history />} />
          {/* Add other sub-routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
