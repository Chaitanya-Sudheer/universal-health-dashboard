import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dnav = () => {

  let navigate = useNavigate();

  function handleClick1() {
      navigate('/');
    }

    function handleClick3() {
      navigate('/Profile');
    }

  return (
    <div className="navbar fixed left-0 top-0 bg-base-100 bg-opacity-0">
  <div className="flex-1">
    <a className="btn btn-ghost text-3xl text-black ml-80 ">DASHBOARD</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered input-info bg-white w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a onClick={handleClick3} className="justify-between  label-text-alt link link-hover text-white" >
            Profile
          </a>
        </li>
        <li><a className="label-text-alt link link-hover text-white" >Settings</a></li>
        <li>
          <a  onClick={handleClick1} className="label-text-alt link link-hover text-white"> Logout</a>
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Dnav