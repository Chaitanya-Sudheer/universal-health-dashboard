import React from 'react'
import Container from './Components/Container'
import Sidemenu from './Components/Sidemenu'
import Body from './Components/Body'
import { Dashnav } from './Components/Dashnav'

const Dashboard = () => {
  return (
    <div className=''>
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Body />
        
      </div>
    </div>
    </div>
  )
}

export default Dashboard