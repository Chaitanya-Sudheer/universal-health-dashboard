import React, { useState, useEffect } from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';
import axiosInstance from "../Auth";

const MedicalDirectives = () => {
  const [medicalDirectiveData, setMedicalDirectiveData] = useState([]);

  useEffect(() => {
    const fetchMedicalDirectives = async () => {
      try {
        const response = await axiosInstance.get("/getMedicalDirectivesByPatientIdHandler");
        setMedicalDirectiveData(response.data.directives);
      } catch (error) {
        console.error("Error fetching medical directives:", error);
      }
    };

    fetchMedicalDirectives();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
          <p className="text-black text-left pl-2 pb-6">
            RECORDS - MEDICAL DIRECTIVES
          </p>

          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th className="text-black pt-2"></th>
                  <th className="text-black">Directive</th>
                  <th className="text-black">Reason</th>
                  <th className="text-black">Date Authorized</th>
                </tr>
              </thead>
              <tbody>
                {medicalDirectiveData.map((item) => (
                  <tr key={item.directive_id} className="text-black">
                    <th>{item.directive_id}</th>
                    <td>{item.directive}</td>
                    <td>{item.reason}</td>
                    <td>{item.date_authorized}</td>
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

export default MedicalDirectives;
