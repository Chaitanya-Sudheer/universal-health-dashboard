import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(null);

 const handleDateChange = (date) => {
    setSelectedDate(date);
 };


  



  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu />
      
      <div className="m-auto grid justify-left mt-4 relative">
      <h1 className="text-[27px] absolute top-20 left-12 ml-2 text-black">Appointments</h1>
      <div className="m-auto grid justify-center mt-4">
          <ul className="flex flexcol gap-4">
            
              <label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
                <div className="label">
                  <span className="label-text text-black">Treatment</span>
                </div>
                <input type="text" placeholder="Type service required" className="input input-bordered input-info bg-white border-2" style={{ width: '561px' }}/>
              </label>
              </ul>
             </div> 

             <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5">
                <div className="label">
                  <span className="label-text text-black">Consulting Doctor</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered input-info bg-white border-2  w-full max-w-xs" />
              </label> 

              <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-5px]">
                <div className="label">
                  <span className="label-text text-black">Timing</span>
                </div>
                <div className="inline-block relative w-64">
                  <select className="input input-bordered input-info bg-white border-2 w-full max-w-xs">
                    <option>9:00 - 10:00</option> 
                    <option>10:00- 11:00</option>
                    <option>11:00 - 12:00</option>
                    <option>1:00 - 2:00</option>
                    <option>2:00 - 3:00</option>
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

              <label className="form-control w-full max-w-xs pt-0.1 pb-10 pl-10 gap-1 ml-2.5 relative top-[-5px]">
 <div className="label">
    <span className="label-text text-black">Date</span>
 </div>
 <DatePicker
    className="input input-bordered input-info bg-white border-2 w-full max-w-xs"
    dateFormat="dd/MM/yyyy"
    selected={selectedDate}
    onChange={handleDateChange}
    placeholderText="Select date"
 />
</label>    
            

      </div>
        
      
    </div>
    <Dnav />
  </div>
  );
};



export default Appointments;