import React, { useState, useEffect } from "react";
import axiosInstance from "../Auth";
import Sidemenu from "./Sidemenu";
import Dnav from "./Dnav";

const Prescription = () => {
  const [prescriptionsData, setPrescriptionsData] = useState([]);

  useEffect(() => {
    const fetchPrescriptionsData = async () => {
      try {
        const response = await axiosInstance.get("/FindPrescriptions");
        const { prescriptions } = response.data;
        if (Array.isArray(prescriptions)) {
          setPrescriptionsData(prescriptions);
        } else {
          console.error(
            "Expected 'prescriptions' to be an array, but received:",
            prescriptions
          );
        }
      } catch (error) {
        console.error("There was a problem with your fetch operation: ", error);
      }
    };

    fetchPrescriptionsData();
  }, []);

  // Function to group prescriptions by prescription_id and diagnosis
  const groupPrescriptions = (prescriptions) => {
    return prescriptions.reduce((groups, prescription) => {
      const key = `${prescription.prescription_id}-${prescription.diagnosis}`;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(prescription);
      return groups;
    }, {});
  };

  const groupedPrescriptions = groupPrescriptions(prescriptionsData);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-lg md:text-xl md:w-3/4 lg:w-2/3 xl:w-3/4">
          <p className="text-black">PRESCRIPTION</p>
          {Object.entries(groupedPrescriptions).map(([key, prescriptions]) => (
            <div key={key}>
              <h2 className="text-lg font-semibold mt-4">{key}</h2>
              <table className="table-auto w-full mt-2">
                <thead>
                  <tr>
                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Medication Name
                    </th>
                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Dosage
                    </th>
                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Start Date
                    </th>
                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">
                      End Date
                    </th>
                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Instructions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptions.map((prescription, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border px-4 py-2 text-sm text-black">
                        {prescription.medication_name}
                      </td>
                      <td className="border px-4 py-2 text-sm text-black">
                        {prescription.dosage}
                      </td>
                      <td className="border px-4 py-2 text-sm text-black">
                        {prescription.frequency}
                      </td>
                      <td className="border px-4 py-2 text-sm text-black">
                        {prescription.start_date}
                      </td>
                      <td className="border px-4 py-2 text-sm text-black">
                        {prescription.end_date}
                      </td>
                      <td className="border px-4 py-2 text-sm text-black">
                        {prescription.instructions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prescription;
