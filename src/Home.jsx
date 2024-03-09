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
        "https://img.freepik.com/free-vector/tiny-people-doctor-prescribing-medicine-patients-online-online-prescription-system-prescription-management-system-online-pharmacy-concept-pinkish-coral-bluevector-vector-isolated-illustration_335657-1601.jpg?size=626&ext=jpg&ga=GA1.1.57018559.1707586521",
    },
    {
      id: 3,
      title: "ONLINE APPOINTMENTS",
      description:
        "Schedule and manage appointments with doctors, specialists, and therapists, via the website or app.",
      imageUrl:
        "https://img.freepik.com/premium-vector/online-doctor-work-illustration-concept-with-characters_269730-103.jpg?size=626&ext=jpg&uid=R137497200&ga=GA1.1.57018559.1707586521",
    },
    {
      id: 4,
      title: "ON TIME MEDICINE DELIVERY",
      description:
        "Integration with pharmacy services to facilitate the delivery of prescribed medications to the user's doorstep.",
      imageUrl:
        "https://img.freepik.com/free-vector/team-volunteers-giving-help-boxes-refuges-humanitarian-aid-van-humanitarian-aid-material-assistance-governmental-help-concept-pinkish-coral-bluevector-isolated-illustration_335657-1388.jpg?t=st=1709924849~exp=1709928449~hmac=7d203d75d5aa86b5a2a55c85c5f3af52310df39d4127b44ea0756c6bcfdd9dbd&w=996",
    },
    {
      id: 5,
      title: "INSURANCE INTEGRATION",
      description:
        "Integrates with insurance systems to provide a transparent view of coverage, claims, and billing information.",
      imageUrl:
        "https://img.freepik.com/free-vector/private-property-transport-life-protection_335657-3144.jpg?t=st=1709902610~exp=1709906210~hmac=5040ab15e950972339875ca24c715ae12b049cb8a68cd35605db5d8c8b6cf2ff&w=996",
    },
    {
      id: 6,
      title: "HEALTH RECORDS AND HISTORY",
      description:
        "Manage patient health records for accurate and updated medical history overview, aiding healthcare professionals.",
      imageUrl:
        "https://img.freepik.com/free-vector/health-insurance-abstract-concept-vector-illustration-health-insurance-contract-medical-expenses-claim-application-form-agent-consultation-sign-document-emergency-coverage-abstract-metaphor_335657-1356.jpg?t=st=1709921498~exp=1709925098~hmac=e506ecec13b80afeb920a5a1443b5a0ee8f30ec36f8b19a836ce1e4ea8e2c83f&w=740",
    },
  ];
  return (
    <div>
      <Navigation />
      <Landing />
      <div className="bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96%">
        <div className="text-black py-12 text-4xl">
          <p>    </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="text-black pt-6 text-4xl">
          <p>OUR SERVICES</p>
        </div>
      </div>
      <div className="hero ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-6 pb-6 px-7">
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
