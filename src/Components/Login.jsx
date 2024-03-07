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
  style={{backgroundImage: 'url(https://i.pinimg.com/564x/b1/cd/8e/b1cd8e13ad0430d3b7576a353d08934a.jpg)'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-20 backdrop-blur-lg  p-4">
      <form className="card-body">
      <div className="form-control">
        <div className='text-white py-6 text-3xl text-left'>
          <p>LOGIN</p>
        </div>
          <label className="label">
              <span className="label-text">User ID</span>
          </label>
          <input type="text" placeholder="User ID" className="input input-bordered input-info w-full max-w-xs" required />
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
          <input type="password" placeholder="password" className="input input-bordered input-info w-full max-w-xs" required />
          <label className="label">
            <a href="http://localhost:5173/Sign_In" className="label-text-alt link link-hover text-white">Don't have an account?Sign up</a>
          </label>
        </div>
        <div className=" form-control mt-6">
          <button onClick={handleClick1} className="btn text-white bg-gradient-to-r from-[#273A96] to-blue-500">LOGIN</button>
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