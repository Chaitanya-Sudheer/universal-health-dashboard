import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    let navigate = useNavigate();

    function handleClick() {
      navigate('/Login');
    }
  return (
   // <div className='bg-[#4F6BFB]' >
        <div  className="navbar bg-gradient-to-r from-[#273A96] to-blue-500 text-white flex justify-around items-center" >
            <a className="btn btn-ghost text-xl">HOME</a>
            <a className="btn btn-ghost text-xl">ABOUT US</a>
            <a className="btn btn-ghost text-2xl">UNI MED</a>
            <a onClick={handleClick} className="btn btn-ghost text-xl">LOGIN</a>
            <a className="btn btn-ghost text-xl">CONTACT</a>
        </div>
    //Navigation</div>
  )
}

export default Navigation