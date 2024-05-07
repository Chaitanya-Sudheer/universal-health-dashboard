import React, { useState, useEffect } from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';
import axiosInstance from "../Auth";

const Fam_Med_History = () => {
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState([]);

  useEffect(() => {
    const fetchFamilyMedicalHistory = async () => {
      try {
        const response = await axiosInstance.get("/getFamilyMedicalHistoryByPatientIdHandler");
        setFamilyMedicalHistory(response.data.family_history);
      } catch (error) {
        console.error("Error fetching family medical history:", error);
      }
    };

    fetchFamilyMedicalHistory();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
          <p className="text-black text-left pl-2 pb-6">
            RECORDS - FAMILY MEDICAL HISTORY
          </p>

          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th className="text-black pt-2">Relationship</th>
                  <th className="text-black">Condition</th>
                  <th className="text-black">Diagnosis Age</th>
                  <th className="text-black">Treatment</th>
                </tr>
              </thead>
              <tbody>
                {familyMedicalHistory.map((item) => (
                  <tr key={item.history_id} className="text-black">
                    <td>{item.relationship}</td>
                    <td>{item.condition}</td>
                    <td>{item.diagnosis_age}</td>
                    <td>{item.treatment}</td>
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

export default Fam_Med_History;
