import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'
const Records = () => {
  return (
<div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu/>
      <Dnav />
      <div className="border border-info rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <p className='text-black'>RECORDS</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  pt-6 pb-6 px-7">

    <div className="card w-80 bg-white shadow-xl border border-info ">
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
    </div>

    <div className="card w-80 bg-white shadow-xl border border-info ">
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
    </div>

    </div>
  </div>
  </div>
  </div>
  )
}

export default Records