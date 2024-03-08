import React from 'react'
import Sidemenu from './Sidemenu'

const Overview = () => {

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu/>
        OVERVIEW
       </div>
    </div>
  )
}

export default Overview