import React from 'react'
import Body from './Body'
import Sidemenu from './Sidemenu'

const Container = () => {
  return (
    
    <div className='flex m-auto h-[120vh] items-center justify-center w-[120vw] my-9 rounded-xl overflow-hidden'>
        <Sidemenu/>
        <Body/>
    </div>
  )
}

export default Container