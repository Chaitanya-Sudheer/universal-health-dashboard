import React from 'react'

const Login = () => {
  return (
    //<div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User ID</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered input-info w-full max-w-xs" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className=" form-control mt-6">
          <button className="btn text-white bg-gradient-to-r from-[#273A96] to-blue-500">LOGIN</button>
        </div>
      </form>
    </div>
  </div>
</div>   
        
    //Login</div>
  )
}

export default Login