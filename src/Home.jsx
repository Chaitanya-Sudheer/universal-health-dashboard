import React from 'react'
import Navigation from './Navigation'
import { Footer } from './Footer'
import Landing from './Landing'
import { useNavigate } from 'react-router-dom'
import Service_Card from './Components/Service_Card'

               
const Home = () => {
    let navigate = useNavigate();

    function handleClick() {
      navigate('/Second_page'); // Navigates to the /home route
    } 
    const servicesData = [
        {
          id: 1,
          title: "PERSONALISED HEALTH TRACKER",
          description: "Track various health metrics such as weight, blood pressure, blood sugar, and exercise routines with our tool.",
          imageUrl: "https://img.freepik.com/free-vector/online-doctor-concept_52683-37473.jpg",
        },
        {
          id: 2,
          title: "MEDICATION MANAGEMENT",
          description: "Assist users in managing medications with reminders for doses, refills, and interactions.",
          imageUrl: "https://img.freepik.com/free-vector/online-doctor-concept_52683-37473.jpg",
        },
        {
          id: 3,
          title: "ONLINE APPOINTMENTS",
          description: "Schedule and manage appointments with doctors, specialists, and therapists, via the website or app.",
          imageUrl: "https://img.freepik.com/free-vector/online-doctor-concept_52683-37473.jpg",
        },
      ]; 
  return (
    <div>
    <Navigation/>
    <Landing/>
    <div className="grid grid-cols-3 gap-15">
      {servicesData.map((service) => (
        <Service_Card
          key={service.id}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
        />
      ))}
    </div>
    <button onClick={handleClick}>Go Second Page</button>
    <Footer/></div>
  )
}

export default Home