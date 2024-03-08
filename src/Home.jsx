import React from "react";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
import Landing from "./Landing";
import { useNavigate } from "react-router-dom";
import Service_Card from "./Components/Service_Card";

const Home = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/Sign_In"); // Navigates to the /home route
  }
  const servicesData = [
    {
      id: 1,
      title: "PERSONALISED HEALTH TRACKER",
      description:
        "Track various health metrics such as weight, blood pressure, blood sugar, and exercise routines with our tool.",
      imageUrl:
        "https://img.freepik.com/free-vector/heart-rate-smartwatch-portable-pulse-tracker-wrist-clock-watch-with-touchscreen-healthcare-app-fitness-assistant-gadget-workout-vector-isolated-concept-metaphor-illustration_335657-2133.jpg?t=st=1709546776~exp=1709550376~hmac=1f9f7ea83327113308d4368b77c16105576ef2428a020e53e33c373bdd641710&w=740",
    },
    {
      id: 2,
      title: "MEDICATION MANAGEMENT",
      description:
        "Assist users in managing medications with reminders for doses, refills, and interactions.",
      imageUrl:
        "https://img.freepik.com/free-vector/online-doctor-concept_52683-37473.jpg",
    },
    {
      id: 3,
      title: "ONLINE APPOINTMENTS",
      description:
        "Schedule and manage appointments with doctors, specialists, and therapists, via the website or app.",
      imageUrl:
        "https://img.freepik.com/free-vector/online-doctor-concept_52683-37473.jpg",
    },
    {
      id: 3,
      title: "ONLINE APPOINTMENTS",
      description:
        "Schedule and manage appointments with doctors, specialists, and therapists, via the website or app.",
      imageUrl:
        "https://img.freepik.com/free-vector/online-doctor-concept_52683-37473.jpg",
    },
  ];
  return (
    <div>
      <Navigation />
      <Landing />
      <div className="bg-white">
        <div className="text-black py-6 text-4xl">
          <p>OUR SERVICES</p>
        </div>
      </div>
      <div className="hero  bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-10 px-7">
          {servicesData.map((service) => (
            <Service_Card
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
