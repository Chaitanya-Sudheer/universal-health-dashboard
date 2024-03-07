import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    let navigate = useNavigate();

    function handleClick() {
      navigate('/Sign_In');
    }
  return (
    //<div className="bg-gradient-to-r from-cyan-500 to-blue-500">
       <div  className="hero  bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96% " >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/free-vector/online-doctor-concept_52683-37473.jpg" 
    className="max-w-450 rounded-lg " />
    <div>
      <h1 className="text-6xl text-left text-black font-bold  font-times">
        Where Care
      </h1>
      <h1 className="text-6xl text-left text-black font-bold  font-times">
        Comes First
      </h1>
      <p className=" text-left py-6 text-black w-96">
        Explore personalized healthcare with tailored routines, medication reminders, easy online appointments, and convenient medication delivery—all to empower your wellness journey.
      </p>
      <button onClick={handleClick} className="btn btn-s text-white sm:btn-sm md:btn-md lg:btn-lg flex justify-center items-center bg-blue-400 border-blue-400  hover:border-blue-500 hover:bg-blue-500 w-36 h-10"> 
        Join us 
      </button>
    </div>
  </div>
</div> 
// Landing</div>
  )
}

export default Landing