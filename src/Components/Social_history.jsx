import React, { useState, useEffect } from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';
import axiosInstance from "../Auth";

const Social_history = () => {
  const [socialHistoryData, setSocialHistoryData] = useState([]);

  useEffect(() => {
    const fetchSocialHistory = async () => {
      try {
        const response = await axiosInstance.get("/getSocialHistoryByPatientIdHandler");
        setSocialHistoryData(response.data.social_history);
      } catch (error) {
        console.error("Error fetching social history:", error);
      }
    };

    fetchSocialHistory();
  }, []);

  // Filtered attributes to display in the left column
  const filteredAttributes = [
    { key: 'education', label: 'Education' },
    { key: 'occupation', label: 'Occupation' },
    { key: 'smoking_status', label: 'Smoking Status' },
    { key: 'alcohol_consumption', label: 'Alcohol Consumption' },
    { key: 'diet', label: 'Diet' }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <Sidemenu />
      <Dnav />
      <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
        <p className="text-black text-left pl-2 pb-6">
          RECORDS - SOCIAL HISTORY
        </p>

        <div className="overflow-x-auto">
          <table className="table table-xs">
            <tbody>
              {filteredAttributes.map(({ key, label }) => (
                <tr key={key} className="text-black">
                  <td className="pr-4 font-semibold">{label}</td>
                  <td>{socialHistoryData[0]?.[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Social_history;
