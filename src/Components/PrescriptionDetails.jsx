import React from 'react'

const PrescriptionDetails = ({ prescription }) => {
  return (
    <div>
      <h2>{prescription.name}</h2>
      <p>Dosage: {prescription.dosage}</p>
      <p>Frequency: {prescription.frequency}</p>
      <p>Instructions: {prescription.instructions}</p>
      <p>Refills Remaining: {prescription.refillsRemaining}</p>
      <p>Prescribing Doctor: {prescription.doctor}</p>
    </div>
  );
};

export default PrescriptionDetails;