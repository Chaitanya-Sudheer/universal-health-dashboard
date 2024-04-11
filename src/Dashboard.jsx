// Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Overview from './Components/Overview';
import Profile from './Components/Profile';
import Prescription from './Components/Prescription';
import Records from './Components/Records';
import Medicines from './Components/Medicines';
import Appointments from './Components/Appointments';
import Treatment_history from './Components/Treatment_history';
import Medical_directives from './Components/Medical_directives';
import Vaccination_history from './Components/Vaccination_history';
import Allergies from './Components/Allergies';
import Fam_Med_History from './Components/Fam_Med_History';
import Social_history from './Components/Social_history';

const Dashboard = () => {
 let navigate = useNavigate();

 // Navigation functions can be defined here if needed

 return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      {/* Sidemenu and other dashboard-specific UI elements */}
        {/* Sidemenu content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Profile />} />
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