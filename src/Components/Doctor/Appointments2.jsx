import React from 'react';
import Sidemenu2 from './Sidemenu2';
import Dnav from '../Dnav';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Appointments2 = () => {
  // Dummy data for upcoming appointments
  const upcomingAppointments = [
    { date: '2024-05-15', time: '10:00 AM', patientName: 'John Doe' },
    { date: '2024-05-16', time: '11:30 AM', patientName: 'Jane Smith' },
    // Add more appointments as needed
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu2 />
        <div className="m-auto grid justify-left mt-4 relative">
          <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">Upcoming Appointments</h1>
          <div className="m-auto grid justify-center mt-4">
            <div className="max-h-screen overflow-y-auto">
              {/* Display upcoming appointments */}
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="border rounded-lg p-3 mb-3">
                  <p>Date: {appointment.date}</p>
                  <p>Time: {appointment.time}</p>
                  <p>Patient Name: {appointment.patientName}</p>
                </div>
              ))}
            </div>
          </div>
          <Dnav />
        </div>
      </div>
    </div>
  );
  
  
}

export default Appointments2;
