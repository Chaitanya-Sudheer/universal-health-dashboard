import React, { useState, useEffect } from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';
import axiosInstance from "../Auth";

const VaccinationHistory = () => {
  const [vaccinationHistoryData, setVaccinationHistoryData] = useState([]);

  useEffect(() => {
    const fetchVaccinationHistory = async () => {
      try {
        const response = await axiosInstance.get("/getVaccinationHistoryByPatientIdHandler");
        setVaccinationHistoryData(response.data.history);
      } catch (error) {
        console.error("Error fetching vaccination history:", error);
      }
    };

    fetchVaccinationHistory();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
          <p className="text-black text-left pl-2 pb-6">
            RECORDS - VACCINATION HISTORY
          </p>

          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th className="text-black pt-2">Vaccine Name</th>
                  <th className="text-black">Dose</th>
                  <th className="text-black">Date Administered</th>
                  <th className="text-black">Location</th>
                  <th className="text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {vaccinationHistoryData.map((item) => (
                  <tr key={item.vaccination_id} className="text-black">
                    <td>{item.vaccine_name}</td>
                    <td>{item.dose}</td>
                    <td>{item.date_administered}</td>
                    <td>{item.location}</td>
                    <td>{item.status}</td>
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

export default VaccinationHistory;
