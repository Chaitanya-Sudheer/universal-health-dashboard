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
          title: "Service One",
          description: "This is the description for Service One.",
          imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        },
        {
          id: 2,
          title: "Service Two",
          description: "This is the description for Service Two.",
          imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        },
        {
          id: 3,
          title: "Service Three",
          description: "This is the description for Service Three.",
          imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        },
        {
            id: 4,
          title: "Service four",
          description: "This is the description for Service Three.",
          imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",

        }
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