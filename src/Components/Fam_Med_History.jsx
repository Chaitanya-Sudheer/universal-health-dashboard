import React from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';

const Fam_Med_History = () => {
  const familyMedicalHistory = [
    {
      id: 1,
      relationship: "Father",
      condition: "Hypertension",
      diagnosisAge: "50",
      treatment: "Blood pressure medication",
    },
    {
      id: 2,
      relationship: "Mother",
      condition: "Diabetes",
      diagnosisAge: "55",
      treatment: "Insulin injections",
    },
    {
      id: 3,
      relationship: "Grandparent",
      condition: "Heart Disease",
      diagnosisAge: "60",
      treatment: "Cardiac medication",
    },
  ];

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
                  <th className="text-black pt-2"></th>
                  <th className="text-black">Relationship</th>
                  <th className="text-black">Condition</th>
                  <th className="text-black">Diagnosis Age</th>
                  <th className="text-black">Treatment</th>
                </tr>
              </thead>
              <tbody>
                {familyMedicalHistory.map((item, index) => (
                  <tr key={index} className="text-black">
                    <th>{item.id}</th>
                    <td>{item.relationship}</td>
                    <td>{item.condition}</td>
                    <td>{item.diagnosisAge}</td>
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
