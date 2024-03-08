import React from 'react'
import Sidemenu from './Sidemenu'

const Appointments = () => {

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu/>
      APPOINTMENTS
     </div>
  </div>
  )
}

export default Appointments