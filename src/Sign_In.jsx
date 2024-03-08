import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { Footer } from './Footer';

const Sign_In = () => {
  let navigate = useNavigate();

  function handleClick1() {
    navigate('/Login'); // Navigates to the /home route
  } 

  return (
    <div>
      <Navigation />
      <div className="hero h-90 bg-blue-200" style={{backgroundImage: 'url(https://i.pinimg.com/564x/a7/bf/8e/a7bf8e534918be24fea8fbeeb8552aa9.jpg)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full  mt-5 mb-5 max-w-sm shadow-2xl shadow-blue-200 bg-white-100 bg-opacity-10 backdrop-blur-lg bg-white-100 bg-opacity-10 backdrop-blur-lg border border-blue-400 border-b-4 border-r-4 p-4">
            <form className="card-body">
              <div className="form-control">
                <div className='text-black py-6 text-3xl text-left'>
                  <p>SIGN UP</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text text-black">First Name</span>
                  </label>
                  <input type="First Name" placeholder="First Name" className="input bg-white input-bordered input-info w-full text-black max-w-xs" required />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text text-black ">Last Name</span>
                  </label>
                  <input type="Last Name" placeholder="Last Name" className="input bg-white input-bordered input-info w-full max-w-xs" required />
                </div>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Doctor</span> 
                  <input type="radio" name="radio-10" className="radio radio-sm checked:bg-blue-400" checked />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Patient</span> 
                  <input type="radio" name="radio-10" className="radio radio-sm checked:bg-blue-400" checked />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input type="Email" placeholder="Email" className="input bg-white input-bordered input-info w-full max-w-xs" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black ">Password</span>
                </label>
                <input type="password" placeholder="password" className="input bg-white input-bordered input-info w-full max-w-xs" required />
                <label className="label">
                  <a onClick={handleClick1} className="label-text-alt link link-hover text-black">Already have an account? Login</a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button onClick={handleClick1} className="btn text-white bg-blue-400 border-blue-400 hover:border-blue-500 hover:bg-blue-500">SIGN UP</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sign_In;
