import React from 'react'
import { CiSearch } from "react-icons/ci";

const Body = () => {
  return (
    <div className='bg-bodyBg h-[100%] basis-80 p-8'>
    <div className='flex items-center justify-center'>
    <div className='flex items-rtl border-b-2 pb-2 basis-1/2 gap-2 justify-content-end'>
    <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search here" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
    </div>
    </div>
    </div>
    )
}

export default Body