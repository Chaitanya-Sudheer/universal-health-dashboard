import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    let navigate = useNavigate();

    function handleClick() {
      navigate('/Second_page');
    }
  return (
    //<div className="bg-gradient-to-r from-cyan-500 to-blue-500">
       <div  className="hero min-h-screen bg-[#CFDCEC] " >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/free-vector/online-doctor-concept_52683-37473.jpg" 
    className="max-w-450 rounded-lg " />
    <div>
      <h1 className="text-5xl text-left text-black font-bold ">
        Where Care Comes First
      </h1>
      <p className=" text-left py-6 text-black">
        Explore personalized healthcare with tailored routines, medication reminders, easy online appointments, and convenient medication delivery—all to empower your wellness journey.
      </p>
      <button onClick={handleClick} className="btn btn-xs text-white sm:btn-sm md:btn-md lg:btn-lg "> 
        Join us 
      </button>
    </div>
  </div>
</div> 
// Landing</div>
  )
}

export default Landing