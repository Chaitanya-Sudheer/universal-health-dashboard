import React, { useState, useEffect } from "react";
import Dnav from "./Dnav";
import Sidemenu from "./Sidemenu";

const Treatment_history = () => {
  const [treatmentHistoryData, setTreatmentHistoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_BACKEND}/GetTreatmentHistoryByPatientID/11`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && Array.isArray(data.treatmentHistory)) {
          setTreatmentHistoryData(data.treatmentHistory);
        } else {
          console.error("Expected treatmentHistory to be an array, but received:", data);
        }
      } catch (error) {
        console.error("There was a problem with your fetch operation: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
          <p className="text-black text-left pl-2 pb-6">
            RECORDS - TREATMENT HISTORY
          </p>

          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th className="text-black pt-2">Treatment ID</th>
                  <th className="text-black">Treatment Type</th>
                  <th className="text-black">Reason</th>
                  <th className="text-black">Doctor</th>
                  <th className="text-black">Hospital</th>
                  <th className="text-black">Medications</th>
                  <th className="text-black">Procedure</th>
                  <th className="text-black">Date</th>
                  <th className="text-black">Any Complications</th>
                  <th className="text-black">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(treatmentHistoryData) && treatmentHistoryData.map((item, index) => (
                  <tr key={index} className="text-black">
                    <th>{item.treatment_id}</th>
                    <td>{item.treatmenttype}</td>
                    <td>{item.reason}</td>
                    <td>{item.doctor}</td>
                    <td>{item.hospital}</td>
                    <td>{item.medications}</td>
                    <td>{item.procedure}</td>
                    <td>{item.date}</td>
                    <td>{item.complications}</td>
                    <td>{item.outcome}</td>
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

export default Treatment_history;
