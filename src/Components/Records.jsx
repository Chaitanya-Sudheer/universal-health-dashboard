import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'
import Record_Box from './Record_Box'
import { useNavigate } from 'react-router-dom'

const Records = () => {

  let navigate = useNavigate();

  const recordData = [
    {
      id: 1,
      title: "TREATMENT HISTORY",
      //description: " ",
      onClick: () => navigate('/Treatment_history'),
    },

    {
      id: 2,
      title: "MEDICAL DIRECTIVES",
      //description: " ",
      onClick: () => navigate('/Medical_directives'),
    },

    {
      id: 3,
      title: "VACCINATION HISTORY",
      //description: "  ",
      onClick: () => navigate('/Vaccination_history'),
    },

    {
      id: 4,
      title: "ALLERGIES",
      //description: "  ",  
      onClick: () => navigate('/Allergies'),
    },

    {
      id: 5,
      title: "FAMILY MEDICAL HISTORY",
      //description: "  ",
      onClick: () => navigate('/Fam_Med_History'),
    },

    {
      id: 6,
      title: "SOCIAL HISTORY",
      //description: " ",
      onClick: () => navigate('/Social_History'),
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
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border border-blue-500 border-b-4 border-r-4 rounded-lg p-6  mb-20 mt-20 ml-12 text-2xl  md:w-3/4 lg:w-2/3 xl:w-3/4">
          <p className='text-black text-left pl-2'>RECORDS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-2 gap-20 pt-10 pb-6 px-7">
            {recordData.map((service) => (
              <Record_Box
                key={service.id}
                title={service.title}
                //description={service.description}
                onClick={service.onClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;

