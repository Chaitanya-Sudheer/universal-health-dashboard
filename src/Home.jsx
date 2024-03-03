import React from 'react'
import Navigation from './Navigation'
import { Footer } from './Footer'
import Landing from './Landing'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate();

    function handleClick() {
      navigate('/Second_page'); // Navigates to the /home route
    }  
  return (
    <div>
    <Navigation/>
    <Landing/>
    <button onClick={handleClick}>Go Second Page</button>
    <Footer/></div>
  )
}

export default Home