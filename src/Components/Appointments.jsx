import React, { useState, useEffect } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axiosInstance from "../Auth";
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';



const Appointments = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [specializations, setSpecializations] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/all-doctors");
        const data = response.data;
        if (data && Array.isArray(data)) {
          setData(data);
          setFilteredData(data); 
          
          const uniqueSpecializations = [...new Set(data.map(doctor => doctor.specialization))];
          setSpecializations(uniqueSpecializations);
        } else {
          console.error(
            "Expected data to be an array, but received:",
            data
          );
        }
      } catch (error) {
        console.error("There was a problem with your fetch operation: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchQuery(value);
    filterData(value, selectedSpecialization);
  };

  const handleSpecializationChange = (event) => {
    const value = event.target.value;
    setSelectedSpecialization(value);
    filterData(searchQuery, value);
  };

  const filterData = (name, specialization) => {
    const filtered = data.filter((doctor) =>
      doctor.name.toLowerCase().includes(name.toLowerCase()) &&
      (specialization === '' || doctor.specialization.toLowerCase() === specialization.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleDoctorSelection = (doctorId) => {
    setSelectedDoctorId(prevId => (prevId === doctorId ? '' : doctorId));
    setErrorMessage('');
  };

  const handlePrintDate = () => {
    if (selectedDate) {
      const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD HH:mm:ss');
      console.log("Selected Date and Time:", formattedDate);
    } else {
      console.log("No date selected.");
    }
  };
  

  const handleBookAppointment = () => {
    if (!selectedDoctorId) {
      setErrorMessage('Please select a doctor to book an appointment.');
      return;
    }
    console.log("Selected Doctor ID:", selectedDoctorId);
    // Add your logic to book the appointment here
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-base md:w-3/4 lg:w-2/3 xl:w-3/4">
          <p className="text-2xl font-bold text-black mb-4">APPOINTMENTS</p>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search by doctor name"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 mr-2 focus:outline-none focus:border-blue-500"
            />
            <select
              value={selectedSpecialization}
              onChange={handleSpecializationChange}
              className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            >
              <option value="">All Specializations</option>
              {specializations.map((specialization, index) => (
                <option key={index} value={specialization}>{specialization}</option>
              ))}
            </select>
          </div>
          <table className="table-fixed w-full">
            <thead>
              <tr className="bg-blue-200">
                <th className="w-1/8 py-2 px-4 font-bold">Select</th>
                <th className="w-1/8 py-2 px-4 font-bold">Doctor Name</th>
                <th className="w-1/8 py-2 px-4 font-bold">Specialization</th>
                <th className="w-1/4 py-2 px-4 font-bold">Available Consultation Time</th>
                <th className="w-1/8 py-2 px-4 font-bold">Hospital Name</th>
                <th className="w-1/4 py-2 px-4 font-bold">Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((doctor, index) => (
                <tr key={index} className={selectedDoctorId === doctor.doctor_id ? "bg-blue-100" : (index % 2 === 0 ? "bg-gray-100" : "bg-white")}>
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={selectedDoctorId === doctor.doctor_id}
                      onChange={() => handleDoctorSelection(doctor.doctor_id)}
                    />
                  </td>
                  <td className="py-2 px-4">{doctor.name}</td>
                  <td className="py-2 px-4">{doctor.specialization}</td>
                  <td className="py-2 px-4">{doctor.available_consultation_time}</td>
                  <td className="py-2 px-4">{doctor.hospital_name}</td>
                  <td className="py-2 px-4">{doctor.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Appointment Date & Time"
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} className="customDateTimePickerInput" />}            />
          </LocalizationProvider>
          <div style={{ marginBottom: '20px' }} />
          <button onClick={() => { handleBookAppointment(); handlePrintDate(); }} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">Book Appointment and Print Date/Time</button>
{errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

        </div>
      </div>
    </div>
  );
}

export default Appointments;
