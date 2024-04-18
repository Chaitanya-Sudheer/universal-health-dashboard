import React from 'react'

const PrescriptionsList = ({prescriptions, onSelectPrescription}) => {
  return (
    <ul>
      {prescriptions.map((prescription) => (
        <li key={prescription.id} onClick={() => onSelectPrescription(prescription)}>
          {prescription.name} - {prescription.dosage}
        </li>
      ))}
    </ul>
  );
};

export default PrescriptionsList;