// Records.jsx
import React from "react";
import Sidemenu from "./Sidemenu";
import Dnav from "./Dnav";
import Record_Box from "./Record_Box";
import { useNavigate } from "react-router-dom";

const Records = () => {
  let navigate = useNavigate();

  const recordData = [
    {
      id: 1,
      title: "TREATMENT HISTORY",
      onClick: () => navigate("/dashboard/patient/treatment_history"),
    },
    {
      id: 2,
      title: "MEDICAL DIRECTIVES",
      onClick: () => navigate("/dashboard/patient/medical_directives"),
    },
    {
      id: 3,
      title: "VACCINATION HISTORY",
      onClick: () => navigate("/dashboard/patient/vaccination_history"),
    },
    {
      id: 4,
      title: "ALLERGIES",
      onClick: () => navigate("/dashboard/patient/allergies"),
    },
    {
      id: 5,
      title: "FAMILY MEDICAL HISTORY",
      onClick: () => navigate("/dashboard/patient/fam_med_history"),
    },
    {
      id: 6,
      title: "SOCIAL HISTORY",
      onClick: () => navigate("/dashboard/patient/social_history"),
    },
    {
      id: 7,
      title: "REVIEW OF SYSTEMS",
      //description: "  ",
    },

    {
      id: 8,
      title: "PHYSICAL EXAMINATIONS",
      //description: " ",
    },

    {
      id: 8,
      title: "OTHERS",
      //description: " ",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <Sidemenu />
      <Dnav />
      <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4">
        <p className="text-black text-left pl-2">RECORDS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-2 gap-20 pt-10 pb-6 px-7">
          {recordData.map((service) => (
            <Record_Box
              key={service.id}
              title={service.title}
              onClick={service.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Records;
