import React from 'react';

const LabResultsbox = ({ labResults }) => {
 return (
    <div>
      <h2>Medical Lab Results</h2>
      <ul>
        {labResults.map(result => (
          <li key={result.id}>
            <strong>Date:</strong> {result.date}<br />
            <strong>Result:</strong> {result.result}<br />
            <strong>Details:</strong> {result.details}<br />
          </li>
        ))}
      </ul>
    </div>
 );
};

export default LabResultsbox;