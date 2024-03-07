import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const Sign_In = () => {
    let navigate = useNavigate();

    function handleClick() {
      navigate('/'); // Navigates to the /home route
    } 
    return (
    <div>
     <Navigation/>
      <p >This is signup page</p>
    <button onClick={handleClick}>
        Go Home Page</button>
    </div>
  )
}

export default Sign_In