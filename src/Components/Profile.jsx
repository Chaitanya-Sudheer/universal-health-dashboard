import React, { useState } from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Profile = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
      <Sidemenu />
      <div className="m-auto grid justify-left mt-4 relative">
        <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">Profile</h1>
        <div className="m-auto grid justify-center mt-4">
        <div className="max-h-screen overflow-y-auto">
          <ul className="flex flexcol gap-4">
            
              <label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
                <div className="label">
                  <span className="label-text text-black">Name</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2  w-full max-w-xs" />
              </label>
            

            
              <label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
                <div className="label">
                  <span className="label-text text-black">Date of birth</span>
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
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2" style={{ width: '561px' }} />
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
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2  w-full max-w-xs" />
              </label>
        
      

      
      <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-[605px] relative top-[-380.5px] mr-[-57px]">
                <div className="label">
                  <span className="label-text text-black">Country</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2  w-full max-w-xs" />
              </label>
      

      
      <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-380.5px]">
                <div className="label">
                  <span className="label-text text-black">Phone Number</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2  w-full max-w-xs" />
              </label>
      

      
      <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-80 relative top-[-508px]">
                <div className="label">
                  <span className="label-text text-black">Email</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2  w-full max-w-xs" />
              </label>

      
      
      <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-508px]">
                <div className="label">
                  <span className="label-text text-black">Marital Status</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2  w-full max-w-xs" />
              </label>
      
      
      <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-80 relative top-[-635px]">
                <div className="label">
                  <span className="label-text text-black">Nationality</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2  w-full max-w-xs" />
              </label>

      
      <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-640px]">
                <div className="label">
                  <span className="label-text text-black">Language Preference</span>
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
      

      
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-blue-400 border-blue-400 hover:border-blue-500 hover:bg-blue-500 relative top-[-630px] ml-12">Submit</button>
      
          </ul>
        </div>
        </div>
        <Dnav />
      </div>
    </div>
   </div>
  );
};

export default Profile;
