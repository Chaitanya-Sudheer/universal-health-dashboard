import React from 'react'
import Sidemenu from './Sidemenu'
import Dnav from './Dnav'
const Profile = () => {
    
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Sidemenu/>
      <div className='m-auto grid justify-center mt-4 relative'>
      <h1 className='text-[27px] absolute top-20 left-12 ml-2'>Profile</h1>
      <div className='m-auto grid justify-center mt-4'>
      <ul className='flex flexcol gap-4'>
      <li><label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
  <div className="label">
    <span className="label-text text-black">Name</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </label></li>

<li>
<label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
  <div className="label">
    <span className="label-text text-black">Date of birth</span>
  </div>
  <div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="text" className="input input-bordered w-full max-w-xs" placeholder="    Select date"/>
</div>
  </label>
</li>


<li><label className="form-control w-full max-w-xs pt-28 pb-10 pl-10 gap-1 ml-2.5">
  <div className="label">
  <span className="label-text text-black">Gender</span>
  </div>
  <div class="inline-block relative w-64">
  <select class="input input-bordered w-full max-w-xs">
    <option>Male</option>
    <option>Female</option>
    <option>Transgender</option>
    <option>Not specified</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
    
    </label>
  </li>

{/*<li>
<label className="form-control w-full max-w-xs pt-10 pb-30 pl-10 gap-1 ml-5">
  <div className="label">
    <span className="label-text text-black">Address</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </label></li> */}


</ul>
      </div>
      <Dnav/>
    
    

      

</div>
     </div>
  </div>

  )
}

export default Profile