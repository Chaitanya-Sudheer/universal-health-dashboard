import React, { useState, useEffect } from 'react';
import axiosInstance from '../Auth'; // Ensure this path is correct
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';

const Medicines = () => {
 // State to hold the medication data
 const [medicinesData, setMedicinesData] = useState([]);

 // Effect hook to fetch medication data when the component mounts
 useEffect(() => {
    const fetchMedicinesData = async () => {
      try {
        const response = await axiosInstance.get("/getMedicationByPatientIdHandler");
        const { medications } = response.data; // Adjust the property name as necessary
        if (Array.isArray(medications)) {
          setMedicinesData(medications);
        } else {
          console.error("Expected 'medications' to be an array, but received:", medications);
        }
      } catch (error) {
        console.error("There was a problem with your fetch operation: ", error);
      }
    };

    fetchMedicinesData();
 }, []); // Empty dependency array means this effect runs once on mount

 return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="m-auto grid justify-left mt-4 relative">
          <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">Medicines</h1>
          <div className="overflow-x-auto">
            <table className="table table-xs " style={{ marginTop: '150px', marginLeft: '45px' }}>
              <thead>
                <tr>
                 <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black' }}>Medication ID</th>
                 <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black' }}>Prescription ID</th>
                 <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black' }}>Medication Name</th>
                 <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black' }}>Dosage</th>
                 <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black' }}>Frequency</th>
                 <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black' }}>Start Date</th>
                 <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black' }}>End Date</th>
                 <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black' }}>Instructions</th>
                </tr>
              </thead>
              <tbody>
                {medicinesData.map((item) => (
                 <tr key={item.medication_id} className="text-black">
                    <td style={{ color: 'gray' }}>{item.medication_id}</td>
                    <td style={{ color: 'gray' }}>{item.prescription_id}</td>
                    <td style={{ color: 'gray' }}>{item.medication_name}</td>
                    <td style={{ color: 'gray' }}>{item.dosage}</td>
                    <td style={{ color: 'gray' }}>{item.frequency}</td>
                    <td style={{ color: 'gray' }}>{item.start_date}</td>
                    <td style={{ color: 'gray' }}>{item.end_date}</td>
                    <td style={{ color: 'gray' }}>{item.instructions}</td>
                 </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Medicines;