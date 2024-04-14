import React from 'react';

const Medicationbox = ({ medications }) => {
 return (
    <div>
      <h2>Current and Previous Medications</h2>
      {medications.length === 0 ? (
        <p>Loading medications...</p>
      ) : (
      <ul>
        {medications.map(medication => (
          <li key={medication.id}>
            <strong>Name:</strong> {medication.name}<br />
            <strong>Intake:</strong> {medication.intake}<br />
            <strong>Information:</strong> {medication.information}<br />
          </li>
        ))}
      </ul>
      )}
    </div>
 );
};

export default Medicationbox;