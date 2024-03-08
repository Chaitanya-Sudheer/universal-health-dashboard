import React from 'react'
import Container from './Components/Container'
import Sidemenu from './Components/Sidemenu'
import Body from './Components/Body'

const Dashboard = () => {
  return (
    <div className=''>
    <div className="flex flex-col md:flex-row  h-screen w-full">
      <div className="flex flex-col md:flex-row gap-4">
        <Sidemenu />
        <Body />
      </div>
    </div>
    </div>
  )
}

export default Dashboard