import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from './assets/doc.png'

const Landing = () => {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/Sign_In');
    }

    return (
        <div className="hero bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96% ">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <img src={image1} className="w-40 md:w-1/2 rounded-lg" />
                <div className="text-left max-w-md">
                    <h1 className="text-6xl text-black font-bold font-times">
                        Where Care
                    </h1>
                    <h1 className="text-6xl text-black font-bold font-times">
                        Comes First
                    </h1>
                    <p className="py-6 text-black">
                        Explore personalized healthcare with tailored routines, medication reminders, easy online appointments, and convenient medication delivery—all to empower your wellness journey.
                    </p>
                    <button onClick={handleClick} className="btn btn-s text-white bg-blue-400 border-blue-400 hover:border-blue-500 hover:bg-blue-500 w-36 h-10">
                        Join us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing;
