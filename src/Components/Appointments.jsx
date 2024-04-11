import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'

const Appointments = () => {

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu />
      <Dnav />
      
        <p className='text-black'>APPOINTMENTS</p>
      
    </div>
  </div>
  )
}

export default Appointments