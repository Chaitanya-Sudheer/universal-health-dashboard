import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'
const Profile = () => {
    
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu/>
     
      <div className="card w-screen hmin-h-screen bg-base-100 shadow-xl">
  <div className="card-body">
  <div className="grid place-items-start h-screen">
    <h2 className="card-title text-[30px]">Profile</h2>
  
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      <Dnav/>
    </div>
    </div>
  </div>
</div>
      


     </div>
  </div>

  )
}

export default Profile