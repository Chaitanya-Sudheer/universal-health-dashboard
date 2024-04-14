import React, { useState, useEffect } from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'
import Medicationbox from './Medicationbox';
import Labresultsbox from './Labresultsbox';
import axios from 'axios';

const Medicines = () => {
 
  const [medications, setMedications] = useState([]);
  const [labresults, setLabresults] = useState([]);
  useEffect(() => {
    
    axios.get('/api/medications')
      .then(response => {
        setMedications(response.data);
      })
      .catch(error => {
        console.error('Error fetching medications:', error);
      });

   
    axios.get('/api/lab-results')
      .then(response => {
        setlabresults(response.data);
      })
      .catch(error => {
        console.error('Error fetching lab results:', error);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu />
      
      <div className="m-auto grid justify-left mt-4 relative">
      <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">Medicines</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Medicationbox medications={medications} />
        <Labresultsbox labResults={labresults} />
      </div>
      
    </div>
  </div>
  <Dnav />
  </div>
  );

};

export default Medicines;