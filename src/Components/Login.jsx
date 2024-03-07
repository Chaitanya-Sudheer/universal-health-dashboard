import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation';

const Login = () => 
  {
    let navigate = useNavigate();

    function handleClick1() {
      navigate('/Dashboard');
    }
  return (
  
  <div>
     <Navigation/>
  <div className="hero h-90 bg-blue-200 "
  style={{backgroundImage: 'url(https://i.pinimg.com/564x/a7/bf/8e/a7bf8e534918be24fea8fbeeb8552aa9.jpg)'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white-100 bg-opacity-10 backdrop-blur-lg  p-4">
      <form className="card-body">
      <div className="form-control">
        <div className='text-black py-6 text-3xl text-left'>
          <p>LOGIN</p>
        </div>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password " placeholder="password " className="input input-bordered input-info w-full max-w-xs " required />
          <label className="label">
            <a href="http://localhost:5173/Sign_In" className="label-text-alt link link-hover text-black">Don't have an account?Sign up</a>
          </label>
        </div>
        <div className=" form-control mt-6">
          <button onClick={handleClick1} className="btn text-white bg-blue-400 border-blue-400  hover:border-blue-500 hover:bg-blue-500">LOGIN</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  )
}
//border border-blue-900
export default Login