import React from 'react';
import Sidemenu2 from './Sidemenu2';
import Dnav from '../Dnav';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Appointments2 = () => {
  // Dummy data for upcoming appointments
  const upcomingAppointments = [
    { date: '2024-05-15', time: '10:00 AM', patientName: 'Johnsmith Doe' },
    { date: '2024-05-16', time: '11:30 AM', patientName: 'Jane Smith' },
    { date: '2024-05-20', time: '9:45 AM', patientName: 'Alice Johnson' },
    { date: '2024-05-22', time: '4:30 PM', patientName: 'Bob Williams' },
    { date: '2024-05-25', time: '1:15 PM', patientName: 'Emily Davis' },
    { date: '2024-05-25', time: '1:15 PM', patientName: 'jacob john' },
    // Add more appointments as needed
  ];

  const handleAccept = (index) => {
    // Logic to handle accepting appointment
    console.log('Accepted appointment:', upcomingAppointments[index]);
  };

  const handleDecline = (index) => {
    // Logic to handle declining appointment
    console.log('Declined appointment:', upcomingAppointments[index]);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <Sidemenu2 />
      <Dnav />
      <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4">
        <p className="text-black text-left pt-6 pl-2">Upcoming Appointments</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-2 gap-20 pt-10 pb-6 px-7">
          {/* Display upcoming appointments */}
          {upcomingAppointments.map((appointment, index) => (
            <div key={index} className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-3 mb-3 relative top-[30px]">
              <p className="text-black text-[20px]">Date: {appointment.date}</p>
              <p className="text-black text-[20px]">Time: {appointment.time}</p>
              <p className="text-black text-[20px]">Patient Name: {appointment.patientName}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  onClick={() => handleAccept(index)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => handleDecline(index)}
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appointments2;
