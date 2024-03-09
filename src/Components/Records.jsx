import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'
import Record_Box from './Record_Box'

const Records = () => {

  const recordData = [
    {
      id: 1,
      title: "TREATMENT HISTORY",
      description: "abcdefghijklmnopqrstuvwxyz",
    },

    {
      id: 2,
      title: "MEDICAL DIRECTIVES",
      description: "abcdefghijklmnopqrstuvwxyz ",
    },

    {
      id: 3,
      title: "MEDICAL DIRECTIVES",
      description: "abcdefghijklmnopqrstuvwxyz ",
    },
    
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl  md:w-3/4 lg:w-2/3 xl:w-1/2">
          <p className='text-black text-left'>RECORDS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-80 pt-6 pb-6 px-7">
            {recordData.map((service) => (
              <Record_Box
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;

