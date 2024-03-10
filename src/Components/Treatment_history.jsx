import React from "react";
import Dnav from "./Dnav";
import Sidemenu from "./Sidemenu";

// Define the data structure for the treatment history
const treatmentHistoryData = [
  {
    id: 1,
    treatmentType: "Clinical Visit",
    reason: "Checkup and general health assessment",
    doctor: "Dr. John Doe",
    hospital: "City Hospital",
    medications: "Paracetamol, Vitamin C",
    procedure: "Physical Examination",
    date: "30-06-2016",
    complications: "No",
    outcome: "Normal",
  },
  {
    id: 2,
    treatmentType: "Surgery",
    reason: "Appendectomy",
    doctor: "Dr. Jane Smith",
    hospital: "Community Hospital",
    medications: "Morphine, Antibiotics",
    procedure: "Appendectomy",
    date: "03-10-2016",
    complications: "Yes, infection",
    outcome: "Successful",
  },
  {
    id: 3,
    treatmentType: "Therapy Session",
    reason: "Physical Therapy for Back Pain",
    doctor: "Dr. Michael Brown",
    hospital: "Wellness Clinic",
    medications: "None",
    procedure: "Physical Therapy",
    date: "04-02-2018",
    complications: "No",
    outcome: "Improved",
  },
  {
    id: 4,
    treatmentType: "Emergency Room Visit",
    reason: "Chest Pain",
    doctor: "Dr. Sarah Lee",
    hospital: "City Hospital",
    medications: "Aspirin, Nitroglycerin",
    procedure: "Cardiac Examination",
    date: "15-03-2021",
    complications: "Yes, heart attack",
    outcome: "Stable",
  },
  {
    id: 5,
    treatmentType: "Consultation",
    reason: "Allergy Testing",
    doctor: "Dr. Alex Johnson",
    hospital: "Allergy Clinic",
    medications: "Antihistamines",
    procedure: "Allergy Testing",
    date: "05-01-2022",
    complications: "No",
    outcome: "Diagnosed with pollen allergy",
  },
];
const Treatment_history = () => {
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
                  <th className="text-black pt-2"></th>
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
                {treatmentHistoryData.map((item, index) => (
                  <tr key={index} className="text-black">
                    <th>{item.id}</th>
                    <td>{item.treatmentType}</td>
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
