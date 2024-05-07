import React from 'react';
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile2 from './Profile2';
import Prescriptions2 from './Prescriptions2';
import Appointments2 from './Appointments2'; // Ensure this import path is correct
import Patients from './Patients';

const Dashboard2 = () => {
    let navigate = useNavigate();
    
    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Profile2 />} />
                    <Route path="profile2" element={<Profile2 />} />
                    <Route path="prescription" element={<Prescriptions2 />} />
                    <Route path="appointments" element={<Appointments2 />} />
                    <Route path="patients" element={<Patients />} />
                    {/* Add other sub-routes as needed */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard2;