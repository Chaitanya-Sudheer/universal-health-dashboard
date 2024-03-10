import React from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';

const Allergies = () => {
const allergyData = [
  {
    id: 1,
    allergen: "Pollen",
    reaction: "Runny nose, sneezing",
    severity: "Mild",
    treatment: "Antihistamines",
    status: "Active",
  },
  {
    id: 2,
    allergen: "Penicillin",
    reaction: "Hives, itching",
    severity: "Moderate",
    treatment: "Avoid Penicillin, EpiPen",
    status: "Inactive",
  },
];

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
                <th className="text-black pt-2"></th>
                <th className="text-black">Allergen</th>
                <th className="text-black">Reaction</th>
                <th className="text-black">Severity</th>
                <th className="text-black">Treatment</th>
                <th className="text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {allergyData.map((item, index) => (
                <tr key={index} className="text-black">
                  <th>{item.id}</th>
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
