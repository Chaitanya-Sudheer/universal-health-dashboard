import React from 'react'
import { FiActivity } from "react-icons/fi";
//import adminimage from '../../assets/admin.png'
import { LuLayoutDashboard } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { GiOpenFolder } from "react-icons/gi";
import { FaFilePrescription } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
const Sidemenu = () => {
  return (
    <div className='Sidemenu p-10 bg-gradient-to-r from-[#273A96] to-blue-500  text-white'>
    <div className='logo mt-4 gap-2 text-[white] flex items-center justify-center m-auto'>
        <FiActivity className='text-[20px]'/>
        <h1 className='text-[20px] align-center justify-center font-black '>UNIMED</h1>
        </div>
        <div className='flex items-center justify-center text-[white] flex-col mt-[3rem] admin'>
        <img src="https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg" className="h-[100px] w-[100px] border-white-200 border-[4px] object-cover rounded-full" alt="Profile Avatar" />
    <span className='opacity-70 mt-2 text-white-400'>Welcome,</span>
    <h3 className='font-bold text-textColor'>User</h3>
    </div>
    
    <div className='m-auto grid justify-center mt-4'>
        <li className='flex pt-3 pb-3 pl-3 gap-2 hover:opacit-100 items-center'>
        <LuLayoutDashboard className='text-white'/>
        <span className='text-textColor'>Overview</span>
        </li>
        <li className='flex pt-3 pb-3 pl-3 gap-2 hover:opacit-100 items-center'>
        <RxAvatar className='text-white'/>
        <span className='text-textColor'>Profile</span>
        </li>
        <li className='flex pt-3 pb-3 pl-3 gap-2 hover:opacit-100 items-center'>
        <GiOpenFolder className='text-white'/>
        <span className='text-textColor'>Records</span>
        </li>
        <li className='flex pt-3 pb-3 pl-3 gap-2 hover:opacit-100 items-center'>
        <FaFilePrescription className='text-white'/>
        <span className='text-textColor'>Prescription</span>
        </li>
        <li className='flex pt-3 pb-3 pl-3 gap-2 hover:opacit-100 items-center'>
        <RiMedicineBottleLine className='text-white'/>
        <span className='text-textColor'>Medicines</span>
        </li>
        <li className='flex pt-3 pb-3 pl-3 gap-2 hover:opacit-100 items-center'>
        <FaRegCalendarAlt className='text-white'/>
        <span className='text-textColor'>Appointments</span>
        </li>
        <li className='flex pt-3 pb-3 pl-3 gap-2 hover:opacit-100 items-center'>
        <CiLogout className='text-white'/>
        <span className='text-textColor'>Logout</span>
        </li>
    </div>

    
    
    </div>
    )
}

export default Sidemenu