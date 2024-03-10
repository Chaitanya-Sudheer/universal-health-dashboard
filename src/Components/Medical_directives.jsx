import React from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';


const Medical_directives = () => {
const medicalDirectiveData = [
  {
    id: 1,
    directive: "Do Not Resuscitate (DNR) Order",
    reason: "Patient's wish to avoid aggressive life-saving measures.",
    authorizedBy: "Dr. Emily Johnson",
    dateAuthorized: "10/15/2019",
  },
  {
    id: 2,
    directive: "Living Will",
    reason: "Refusal of life-sustaining treatment if in a terminal condition.",
    authorizedBy: "Patient and two witnesses",
    dateAuthorized: "05/20/2019",
  },
  {
    id: 3,
    directive: "Power of Attorney for Healthcare",
    reason: "Designated proxy to make healthcare decisions if patient is unable to communicate.",
    authorizedBy: "Notary Public",
    dateAuthorized: "08/12/2020",
  },
  {
    id: 4,
    directive: "Organ Donation Directive",
    reason: "Patient wishes to donate organs in case of death.",
    authorizedBy: "Patient",
    dateAuthorized: "02/28/2029",
  },
  {
    id: 5,
    directive: "Palliative Care Directive",
    reason: "Opt for palliative care for pain management in terminal illness.",
    authorizedBy: "Dr. Michael Smith",
    dateAuthorized: "11/05/2023",
  },

  
];


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
                  <th className="text-black">Authorized By</th>
                  <th className="text-black">Date Authorized</th>
                </tr>
              </thead>
              <tbody>
                {medicalDirectiveData.map((item, index) => (
                  <tr key={index} className="text-black">
                    <th>{item.id}</th>
                    <td>{item.directive}</td>
                    <td>{item.reason}</td>
                    <td>{item.authorizedBy}</td>
                    <td>{item.dateAuthorized}</td>
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

export default Medical_directives