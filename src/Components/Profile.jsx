import React, { useState, useEffect } from "react";
import Sidemenu from "./Sidemenu";
import Dnav from "./Dnav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../Auth"; // Adjust the import path as necessary

const Profile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.post("users/profile", {}) // Empty body for the POST request
    .then(response => {
      setProfileData(response.data.profile);
      setLoading(false);
    })
      .catch((error) => {
        console.error("Failed to fetch profile data:", error);
        setLoading(false);
      });
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    // Render the form here
    return (
      <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <Sidemenu />
          <div className="m-auto grid justify-left mt-4 relative">
            <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">
              Profile
            </h1>
            <div className="m-auto grid justify-center mt-4">
              <div className="max-h-screen overflow-y-auto">
                <ul className="flex flexcol gap-4">
                  <label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
                    <div className="label">
                      <span className="label-text text-black">Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info bg-white border-2  w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
                    <div className="label">
                      <span className="label-text text-black">
                        Date of birth
                      </span>
                    </div>
                    <DatePicker
                      className="input input-bordered input-info bg-white border-2  w-full max-w-xs"
                      dateFormat="dd/MM/yyyy"
                      selected={selectedDate}
                      onChange={handleDateChange}
                      placeholderText="Select date"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
                    <div className="label">
                      <span className="label-text text-black">Gender</span>
                    </div>
                    <div className="inline-block relative w-64">
                      <select className="input input-bordered input-info bg-white border-2  w-full max-w-xs">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Transgender</option>
                        <option>Not specified</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </label>
                </ul>

                <ul>
                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5">
                    <div className="label">
                      <span className="label-text text-black">Address</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info bg-white border-2"
                      style={{ width: "561px" }}
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-6 gap-1 ml-[640px] relative top-[-127px]">
                    <div className="label">
                      <span className="label-text text-black">City</span>
                    </div>
                    <div className="inline-block relative w-64">
                      <select className="input input-bordered input-info bg-white border-2  w-full max-w-xs">
                        <option>Kollam</option>
                        <option>Trivandrum</option>
                        <option>Kochi</option>
                        <option>Thrissur</option>
                        <option>Alappuzha</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-126px]">
                    <div className="label">
                      <span className="label-text text-black">State</span>
                    </div>
                    <div className="inline-block relative w-64">
                      <select className="input input-bordered input-info bg-white border-2 w-full max-w-xs">
                        <option>Kerala</option>
                        <option>Tamil Nadu</option>
                        <option>Karnataka</option>
                        <option>Maharashtra</option>
                        <option>Hyderabad</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-[295px] relative top-[-253px]">
                    <div className="label">
                      <span className="label-text text-black">Zipcode</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info bg-white border-2  w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-[605px] relative top-[-380.5px] mr-[-57px]">
                    <div className="label">
                      <span className="label-text text-black">Country</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info bg-white border-2  w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-380.5px]">
                    <div className="label">
                      <span className="label-text text-black">
                        Phone Number
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info bg-white border-2  w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-80 relative top-[-508px]">
                    <div className="label">
                      <span className="label-text text-black">Email</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info bg-white border-2  w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-508px]">
                    <div className="label">
                      <span className="label-text text-black">
                        Marital Status
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info bg-white border-2  w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-80 relative top-[-635px]">
                    <div className="label">
                      <span className="label-text text-black">Nationality</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info bg-white border-2  w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-640px]">
                    <div className="label">
                      <span className="label-text text-black">
                        Language Preference
                      </span>
                    </div>
                    <div className="inline-block relative w-64">
                      <select className="input input-bordered input-info bg-white border-2 w-full max-w-xs">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Malayalam</option>
                        <option>Telugu</option>
                        <option>Urdu</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </label>

                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-blue-400 border-blue-400 hover:border-blue-500 hover:bg-blue-500 relative top-[-630px] ml-12">
                    Submit
                  </button>
                </ul>
              </div>
            </div>
            <Dnav />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
        <div className="flex flex-col md:flex-row">
      <Sidemenu />
      
      <div className="m-auto grid justify-left mt-4 relative">
            <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">
            Profile
          </h1>
           
          <div className="bg-white border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 rounded-lg shadow-md ml-12 relative top-[150px] ">
            {/* Display profile data here */}
            <p className="text-black mb-5 text-[18px]">Name: {profileData.name}</p>
            <p className="text-black mb-5 text-[18px]">Date of Birth: {profileData.date_of_birth}</p>
            <p className="text-black mb-5 text-[18px]">Gender: {profileData.gender}</p>
            <p className="text-black mb-5 text-[18px]">Address: {profileData.address}</p>
            <p className="text-black mb-5 text-[18px]">Phone Number: {profileData.phone_number}</p>
            <p className="text-black mb-5 text-[18px]">Email: {profileData.email}</p>
            <p className="text-black mb-5 text-[18px]">Marital Status: {profileData.marital_status}</p>
            <p className=" text-black mb-5 text-[18px]">Nationality: {profileData.nationality}</p>
            <p className="text-black mb-5 text-[18px]">Language Preference: {profileData.language_preference}</p>
          </div>
          <Dnav />
        </div>
      </div>
    </div>
    
    
  );

  
  
};

export default Profile;
