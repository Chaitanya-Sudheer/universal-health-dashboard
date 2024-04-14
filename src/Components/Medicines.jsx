import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'

const Medicines = () => {
    const medicinesData = [
      {
        medicationid: 101,
        prescriptionid: 1181,
        medicationname: "Aspirin",
        dosage: "1 tablet",
        frequency: "Daily",
        startdate: "09/10/2023",
        enddate: "05/12/2023",
        instructions: "Take 1 tablet by mouth once daily for pain",
      },
      {
        medicationid: 102,
        prescriptionid: 1182,
        medicationname: "Amoxicillin",
        dosage: "1 tablet",
        frequency: "Every 8 hours",
        startdate: "15/01/2023",
        enddate: "25/01/2023",
        instructions: "Take 1 tablet by mouth every 8 hours for 10 days for an infection",
      },
      {
        medicationid: 103,
        prescriptionid: 1183,
        medicationname: "Lisinopril",
        dosage: "10 mg, 1 tablet",
        frequency: "Daily",
        startdate: "25/03/2022",
        enddate: "05/12/2022",
        instructions: "Take 1 tablet by mouth daily",
      },
      {
        medicationid: 104,
        prescriptionid: 1184,
        medicationname: "Metformin",
        dosage: "1 tablet",
        frequency: "Twice daily",
        startdate: "01/01/2022",
        enddate: "05/03/2022",
        instructions: "Take 1 tablet by mouth twice",
      },
      
    ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu />
      <Dnav />
      <div className="m-auto grid justify-left mt-4 relative">
      
      <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">Medicines</h1>
      <div className="overflow-x-auto">
            <table className="table table-xs " style={{ marginTop: '150px', marginLeft: '45px' }}>
              <thead>
                <tr>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Medication ID</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Prescription ID</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Medication Name</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Dosage</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Frequency</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Start Date</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>End Date</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Instructions</th>
                </tr>
              </thead>
              <tbody>
                {medicinesData.map((item) => (
                  <tr key={item.id} className="text-black">
                    <td style={{ color: 'gray' }}>{item.medicationid}</td>
                    <td style={{ color: 'gray' }}>{item.prescriptionid}</td>
                    <td style={{ color: 'gray' }}>{item.medicationname}</td>
                    <td style={{ color: 'gray' }}>{item.dosage}</td>
                    <td style={{ color: 'gray'}}>{item.frequency}</td>
                    <td style={{ color: 'gray' }}>{item.startdate}</td>
                    <td style={{ color: 'gray' }}>{item.enddate}</td>
                    <td style={{ color: 'gray' }}>{item.instructions}</td>
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

export default Medicines;