import React, { useEffect, useState } from 'react';
import axiosInstance from "../Auth";
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';

const Appointments = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/all-doctors");
        const data = response.data;
        if (data && Array.isArray(data)) {
          setData(data);
          setFilteredData(data); // Initialize filtered data with all doctors
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

  // Function to handle search/filter
  const handleSearch = (value) => {
    setSearchQuery(value);
    const filtered = data.filter((doctor) =>
      doctor.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-base md:w-3/4 lg:w-2/3 xl:w-3/4">
          <p className="text-2xl font-bold text-black mb-4">APPOINTMENTS</p>
          <input
            type="text"
            placeholder="Search by doctor name"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:border-blue-500"
          />
          <table className="table-fixed w-full">
            <thead>
              <tr className="bg-blue-200">
                <th className="w-1/8 py-2 px-4 font-bold">Doctor Name</th>
                <th className="w-1/8 py-2 px-4 font-bold">Doctor ID</th>
                <th className="w-1/8 py-2 px-4 font-bold">Specialization</th>
                <th className="w-1/8 py-2 px-4 font-bold">Hospital ID</th>
                <th className="w-1/4 py-2 px-4 font-bold">Available Consultation Time</th>
                <th className="w-1/8 py-2 px-4 font-bold">Hospital Name</th>
                <th className="w-1/4 py-2 px-4 font-bold">Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((doctor, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="py-2 px-4">{doctor.name}</td>
                  <td className="py-2 px-4">{doctor.doctor_id}</td>
                  <td className="py-2 px-4">{doctor.specialization}</td>
                  <td className="py-2 px-4">{doctor.hospital_id}</td>
                  <td className="py-2 px-4">{doctor.available_consultation_time}</td>
                  <td className="py-2 px-4">{doctor.hospital_name}</td>
                  <td className="py-2 px-4">{doctor.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
