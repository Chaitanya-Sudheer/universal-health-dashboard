import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    let navigate = useNavigate();

    function handleClick() {
      navigate('/Login');
    }
  return (
   // <div className='bg-[#4F6BFB]' >
        <div  className="navbar bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96% text-black flex justify-around items-center" >
            <a href="http://localhost:5173/" className="btn btn-ghost text-l">HOME</a>
            <a className="btn btn-ghost text-l">ABOUT US</a>
            <a className="btn btn-ghost text-xl">UNI MED</a>
            <a onClick={handleClick} className="btn btn-ghost text-l">LOGIN</a>
            <a className="btn btn-ghost text-l">CONTACT</a>
        </div>
    //Navigation</div>
  )
}

export default Navigation