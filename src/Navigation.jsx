import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navigation = () => {
    let navigate = useNavigate();

    function handleClick1() {
      navigate('/Login');
    }
    
    function handleClick2() {
      navigate('/');
    }

    function handleClick3() {
      navigate('/AboutUs');
    }

    function handleClick4() {
      navigate('/Contact');
    }

  return (
   // <div className='bg-[#4F6BFB]' >
        <div  className="navbar bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96% text-black flex justify-around items-center" >
            <a onClick={handleClick2} className="btn btn-ghost text-l" >HOME</a>
            <a onClick={handleClick3} className="btn btn-ghost text-l">ABOUT US</a>
            <a className="btn btn-ghost text-xl">UNIMED</a>
            <a onClick={handleClick1} className="btn btn-ghost text-l">LOGIN</a>
            <a onClick={handleClick4} className="btn btn-ghost text-l">CONTACT</a>
        </div>
    //Navigation</div>
  )
}

export default Navigation