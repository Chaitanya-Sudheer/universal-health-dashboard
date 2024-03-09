import React from 'react'
import Dnav from './Dnav'
import Sidemenu from './Sidemenu'

const Treatment_history = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu />
      <Dnav />
      <div className="border border border-blue-500 border-b-4 border-r-4 rounded-lg p-6  mb-20 mt-20 ml-12 text-2xl  md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
        <p className='text-black text-left pl-2 pb-6'>RECORDS - TREATMENT HISTORY</p>

        <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th className='text-black pt-2' ></th> 
        <th className='text-black'>Treatment Type</th> 
        <th className='text-black' >Reason</th> 
        <th className='text-black'>Doctor</th> 
        <th className='text-black' >Hospital</th> 
        <th className='text-black'>Medications</th> 
        <th className='text-black'>Procedure</th>
        <th className='text-black'>Date</th>
        <th className='text-black'>Any Complications</th>
        <th className='text-black'>Outcome</th>
      </tr>
    </thead> 
    <tbody>
      <tr className='text-black pt-6'  >
        <th>1</th> 
        <td>Clinical Visit</td>
        <td>Checkup and general health assessment</td>
        <td>Dr. John Doe</td>
        <td>City Hospital</td>
        <td>Paracetamol, Vitamin C</td>
        <td>Physical Examination</td>
        <td>30-06-2016</td>
        <td>No</td>
        <td>Normal</td>
      </tr>
      <tr className='text-black' >
        <th>2</th> 
        <td>Surgery</td>
        <td>Appendectomy</td>
        <td>Dr. Jane Smith</td>
        <td>Community Hospital</td>
        <td>Morphine, Antibiotics</td>
        <td>Appendectomy</td>
        <td>03-10-2016</td>
        <td>Yes, infection</td>
        <td>Successful</td>
      </tr>
      <tr className='text-black' >
        <th>3</th> 
        <td>Therapy Session</td>
        <td>Physical Therapy for Back Pain</td>
        <td>Dr. Michael Brown</td>
        <td>Wellness Clinic</td>
        <td>None</td>
        <td>Physical Therapy</td>
        <td>04-02-2018</td>
        <td>No</td>
        <td>Improved</td>
      </tr>
      <tr className='text-black' >
        <th>4</th> 
        <td>Emergency Room Visit</td>
        <td>Chest Pain</td>
        <td>Dr. Sarah Lee</td>
        <td>City Hospital</td>
        <td>Aspirin, Nitroglycerin</td>
        <td>Cardiac Examination</td>
        <td>15-03-2021</td>
        <td>Yes, heart attack</td>
        <td>Stable</td>
      </tr>
      <tr className='text-black' >
        <th>5</th> 
        <td>Consultation</td>
        <td>Allergy Testing</td>
        <td>Dr. Alex Johnson</td>
        <td>Allergy Clinic</td>
        <td>Antihistamines</td>
        <td>Allergy Testing</td>
        <td>05-01-2022</td>
        <td>No</td>
        <td>Diagnosed with pollen allergy</td>
      </tr>
    </tbody> 
  </table>
</div>

      </div>
    </div>
  </div>
  )
}

export default Treatment_history