//dashboard of the doctor
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile2 from './Profile2';
import Prescriptions2 from './Prescriptions2';
import Appointments2 from './Appointments2';

const Dashboard2 = () => {
    let navigate = useNavigate();
   
    // Navigation functions can be defined here if needed
   
    return (
       <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
         {/* Sidemenu and other dashboard-specific UI elements */}
           {/* Sidemenu content */}
         <div className="flex-grow">
           <Routes>
             <Route path="/" element={<Profile2 />} />
             <Route path="profile2" element={<Profile2 />} />
             <Route path="prescription2" element={<Prescriptions2 />} />
             <Route path="appointments2" element={<Appointments2/>} />
             {/* Add other sub-routes as needed */}
           </Routes>
         </div>
       </div>
    );
   };
   
   export default Dashboard2;