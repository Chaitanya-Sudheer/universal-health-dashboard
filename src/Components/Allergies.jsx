import React, { useState, useEffect } from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';
import axiosInstance from "../Auth";

const Allergies = () => {
  const [allergyData, setAllergyData] = useState([]);

  useEffect(() => {
    const fetchAllergies = async () => {
      try {
        const response = await axiosInstance.get("/getAllergiesByPatientIdHandler");
        setAllergyData(response.data.allergies);
      } catch (error) {
        console.error("Error fetching allergies:", error);
      }
    };

    fetchAllergies();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <Sidemenu />
      <Dnav />
      <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
        <p className="text-black text-left pl-2 pb-6">
          RECORDS - ALLERGIES
        </p>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="text-black pt-2">Allergen</th>
                <th className="text-black">Reaction</th>
                <th className="text-black">Severity</th>
                <th className="text-black">Treatment</th>
                <th className="text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {allergyData.map((item) => (
                <tr key={item.allergy_id} className="text-black">
                  <td>{item.allergen}</td>
                  <td>{item.reaction}</td>
                  <td>{item.severity}</td>
                  <td>{item.treatment}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allergies;
