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
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-lg md:text-xl md:w-3/4 lg:w-2/3 xl:w-3/4">
          <p className="text-black">PRESCRIPTION</p>
          <div className="m-auto grid justify-left mt-4 relative">
            <div className="overflow-x-auto">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-2 py-1">Prescription ID</th>
                    <th className="px-2 py-1">Medication Name</th>
                    <th className="px-2 py-1">Dosage</th>
                    <th className="px-2 py-1">Frequency</th>
                    <th className="px-2 py-1">Start Date</th>
                    <th className="px-2 py-1">End Date</th>
                    <th className="px-2 py-1">Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  {medicinesData.map((item, index) => (
                    <tr key={index} className="text-black">
                      <td className="border px-2 py-1">{item.prescription_id}</td>
                      <td className="border px-2 py-1">{item.medication_name}</td>
                      <td className="border px-2 py-1">{item.dosage}</td>
                      <td className="border px-2 py-1">{item.frequency}</td>
                      <td className="border px-2 py-1">{item.start_date}</td>
                      <td className="border px-2 py-1">{item.end_date}</td>
                      <td className="border px-2 py-1">{item.instructions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicines;
