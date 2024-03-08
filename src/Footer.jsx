import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer  p-10 bg-base-200 text-base-content">
    <nav>
      <h6 className="footer-title ml-10">Services</h6> 
      <a className=" ml-10 link link-hover">Branding</a>
      <a className=" ml-10 link link-hover">Design</a>
      <a className=" ml-10  link link-hover">Marketing</a>
      <a className="ml-10 link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Company</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Legal</h6> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav> 
    <form>
      <h6 className="footer-title">Newsletter</h6> 
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label> 
        <div className="join">
          <input type="text" placeholder="username@gmail.com" className="input input-bordered join-item" /> 
          <button className="btn text-white bg-blue-400 border-blue-400  hover:border-blue-500 hover:bg-blue-500 join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
      
      //Footer</div>
  )
}
