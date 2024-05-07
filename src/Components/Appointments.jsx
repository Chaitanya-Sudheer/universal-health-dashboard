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
  const [hospitalSearchQuery, setHospitalSearchQuery] = useState('');
  const [patientID, setPatientID] = useState('');

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

  const handleHospitalSearch = (value) => {
    setHospitalSearchQuery(value);
    filterDoctors(searchQuery, selectedSpecialization, value); 
  };

  const filterDoctors = (name, specialization, hospital) => {
    const filtered = data.filter((doctor) =>
      doctor.name.toLowerCase().includes(name.toLowerCase()) &&
      (specialization === '' || doctor.specialization.toLowerCase() === specialization.toLowerCase()) &&
      doctor.hospital_name.toLowerCase().includes(hospital.toLowerCase()) // Check hospital name
    );
    setFilteredData(filtered);
  };


  const handlePrintDate = () => {
    if (selectedDate) {
      const formattedDate = dayjs(selectedDate).format('YYYY-MM-DDTHH:mm:ss[Z]');
      console.log("Selected Date and Time:", formattedDate);
    } else {
      console.error("No date selected.");
    }
  };
  

  const handleBookAppointment = async () => {
    console.log("Selected Doctor ID:", selectedDoctorId);
  
    if (!selectedDoctorId ) {
      setErrorMessage('Please select a doctor to book an appointment.');
      return;
    }
  
    if (!selectedDate ) {
      setErrorMessage('Please select a date to book an appointment.');
      return;
    }
  
    try {
      // Fetch user ID from the /me endpoint
      const response = await axiosInstance.get("/me");
      const userData = response.data;
      
      if (userData && userData.patient_id) {
        setPatientID(userData.patient_id);
      } else {
        console.error("Unexpected response from /me endpoint:", userData);
      }
    } catch (error) {
      console.error("Error fetching user ID from /me endpoint:", error);
    }
  
    const appointmentData = {
      doctor_id: selectedDoctorId,
      patient_id: patientID, // Use userID from state
      appointment_date: dayjs(selectedDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      status: 'scheduled'
    };
  
    try {
      const response = await axiosInstance.post("/appointments", appointmentData);
      console.log("Appointment booked successfully:", response.data);
      // Handle successful appointment booking, e.g., show a success message or redirect
    } catch (error) {
      console.error("Error booking appointment:", error);
      setErrorMessage('Failed to book appointment. Please try again.');
    }
  };
  
  // Use useEffect to log the updated userID
  useEffect(() => {
    console.log("Patient ID:", patientID);
  }, [patientID]);
  
  

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
              className="w-full border border-blue-500 bg-white border-2 rounded-lg py-2 px-4 mb-4 mr-2 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Search by hospital name"
              value={hospitalSearchQuery}
              onChange={(e) => handleHospitalSearch(e.target.value)} // Handle hospital name search
              className="w-full border border-blue-500 bg-white border-2 rounded-lg py-2 px-4 mb-4 mr-2 focus:outline-none focus:border-blue-500"
            />
            <select
              value={selectedSpecialization}
              onChange={handleSpecializationChange}
              className="border border-blue-500 bg-white border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
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
                <th className="w-1/8 py-2 px-4 text-black font-bold">Select</th>
                <th className="w-1/8 py-2 px-4 text-black font-bold">Doctor Name</th>
                <th className="w-1/8 py-2 px-4 text-black font-bold">Specialization</th>
                <th className="w-1/4 py-2 px-4 text-black font-bold">Available Consultation Time</th>
                <th className="w-1/8 py-2 px-4 text-black font-bold">Hospital Name</th>
                <th className="w-1/8 py-2 px-4 text-black font-bold">Address</th>
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
          <button onClick={() => { handleBookAppointment(); handlePrintDate(); }} 
          className="font-bold py-2 px-4 rounded text-white bg-blue-400 border-blue-400 hover:border-blue-500 hover:bg-blue-500 mt-4">Book Appointment
          </button> {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

        </div>
      </div>
        
      
    </div>
  );
}

export default Appointments;
