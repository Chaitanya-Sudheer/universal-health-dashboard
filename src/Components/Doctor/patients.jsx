import React from 'react'
import Sidemenu from './Sidemenu2'
import Dnav from '../Dnav'

const Patients = () => {
    const patientsData = [
        {
          patientid: 11,
          patientname: "John Doe",
          gender: "Male",
          phonenumber: 555-1234,
          age: 65,
          reasonforvisit: Heartache ,
          email: "john@example.com",
        },
        {
            patientid: 12,
            patientname: "Jane Smith",
            gender: "Female",
            phonenumber: 555-5678,
            age: 45,
            reasonforvisit: "migraine",
            email: "jane@example.com",
        },
        {
            patientid: 13,
            patientname: "Patient3 User",
            gender: "Male",
            phonenumber: 555-2468,
            age: 30,
            reasonforvisit: "fatigue",
            email: "patient3@example.com",
        },
        {
            patientid: 14,
            patientname: "Patient4 User",
            gender: "Male",
            phonenumber: 555-9876,
            age: 45,
            reasonforvisit: "muscle weakness",
            email: "patient4@example.com",
        },
        
      ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu2 />
       <Dnav />
      <div className="m-auto grid justify-left mt-4 relative">
      <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">Patients</h1>
      <div className="overflow-x-auto">
      <table className="table table-xs " style={{ marginTop: '150px', marginLeft: '45px' }}>
              <thead>
                <tr>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Patient ID</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Patient Name</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Gender</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Phone Number</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Age</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Reason</th>
                  <th className="text-black font-bold" style={{ fontSize: '16px',borderBottom: '1px solid black'}}>Email</th>
                  
                </tr>
              </thead>
              <tbody>
                {patientsData.map((item) => (
                  <tr key={item.id} className="text-black">
                    <td style={{ color: 'gray' }}>{item.patientid}</td>
                    <td style={{ color: 'gray' }}>{item.patientname}</td>
                    <td style={{ color: 'gray' }}>{item.gender}</td>
                    <td style={{ color: 'gray' }}>{item.phonenumber}</td>
                    <td style={{ color: 'gray'}}>{item.age}</td>
                    <td style={{ color: 'gray' }}>{item.reasonforvisit}</td>
                    <td style={{ color: 'gray' }}>{item.email}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          
    </div>
    </div>
    </div>
    </div>
  )
}

export default Patients;