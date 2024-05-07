import React from "react";

const Prescription2 = ({ prescription }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          className="h-12 w-12"
          src="/path/to/prescription-icon.svg"
          alt="Prescription Icon"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">
          Prescription Details
        </div>
        <p className="text-gray-500">{prescription.diagnosis}</p>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-black leading-none">Medication:</p>
              <p className="text-gray-600">{prescription.medicationName}</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-sm">
              <p className="text-black leading-none">Dosage:</p>
              <p className="text-gray-600">{prescription.dosage}</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-sm">
              <p className="text-black leading-none">Frequency:</p>
              <p className="text-gray-600">{prescription.frequency}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
            View Full Prescription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prescription2;
