import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'

const Overview = () => {

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu />
      <Dnav />
      <div className="border border-info rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <p className='text-black'>OVERVIEW</p>
      </div>
    </div>
  </div>
  )
}

export default Overview