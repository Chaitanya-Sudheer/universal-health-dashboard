import React, { useState, useEffect } from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';
import axiosInstance from "../Auth";

const Medicines = () => {
  const [medicinesData, setMedicinesData] = useState([]);

  useEffect(() => {
    const fetchMedicinesData = async () => {
       try {
         const response = await axiosInstance.get("/getMedicationByPatientIdHandler");
         const { medications } = response.data; // Extract medications array from response
         if (Array.isArray(medications)) {
           setMedicinesData(medications);
         } else {
           console.error(
             "Expected 'medications' to be an array, but received:",
             medications
           );
         }
       } catch (error) {
         console.error("There was a problem with your fetch operation: ", error);
       }
    };
   
    fetchMedicinesData();
   }, []);

   return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <Sidemenu />
      <Dnav />
      <div className="m-auto grid justify-left mt-4 relative">
        <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">Medicines</h1>
        <div className="overflow-x-auto">
          <table className="table table-xs" style={{ marginTop: '150px' }}>
            <thead>
              <tr>
                <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black', textAlign: 'left' }}>Prescription ID</th>
                <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black', textAlign: 'left' }}>Medication Name</th>
                <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black', textAlign: 'left' }}>Dosage</th>
                <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black', textAlign: 'left' }}>Frequency</th>
                <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black', textAlign: 'left' }}>Start Date</th>
                <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black', textAlign: 'left' }}>End Date</th>
                <th className="text-black font-bold" style={{ fontSize: '16px', borderBottom: '1px solid black', textAlign: 'left' }}>Instructions</th>
              </tr>
            </thead>
            <tbody>
              {medicinesData.map((item, index) => (
                <tr key={index} className="text-black">
                  <td style={{ color: 'gray', textAlign: 'left' }}>{item.prescription_id}</td>
                  <td style={{ color: 'gray', textAlign: 'left' }}>{item.medication_name}</td>
                  <td style={{ color: 'gray', textAlign: 'left' }}>{item.dosage}</td>
                  <td style={{ color: 'gray', textAlign: 'left' }}>{item.frequency}</td>
                  <td style={{ color: 'gray', textAlign: 'left' }}>{item.start_date}</td>
                  <td style={{ color: 'gray', textAlign: 'left' }}>{item.end_date}</td>
                  <td style={{ color: 'gray', textAlign: 'left' }}>{item.instructions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  };
export default Medicines;
