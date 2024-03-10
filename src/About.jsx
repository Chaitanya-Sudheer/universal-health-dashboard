import React from 'react';
import Navigation from './Navigation';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/Sign_In');
  }

  return (
    <div>
      <Navigation />

      <div className="hero md:flex-row  bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96%">
        <div className="flex flex-col justify-center items-center text-center text-white p-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-black"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl mb-8 text-black"
          >
            Welcome to UNIMED!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-md mb-8 ml-6 mr-6 text-black"
          >
            At UNIMED, we are committed to providing innovative healthcare solutions that empower individuals to take control of their health and well-being. Our platform offers a comprehensive suite of tools and resources designed to make managing your health easier and more accessible.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.20 }}
            onClick={handleClick}
            className="btn btn-s text-white bg-blue-400 border-blue-400 hover:border-blue-500 hover:bg-blue-500 w-36 h-10"
          >
            Join Us
          </motion.button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96%">
        <div className="text-black py-12 text-4xl">
          <p>    </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white py-12 m-4 border-2 border-blue-500 border-b-4 border-r-4 p-4 rounded-lg"
      >
        <div className="container mr-12 ">
          <h2 className="text-2xl text-black font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-md text-black  text-justify-center leading-relaxed">
            Our mission is to revolutionize healthcare by leveraging technology to create a seamless experience for patients and healthcare providers. We believe that everyone should have access to personalized, high-quality healthcare, and our goal is to make this a reality.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white py-6 m-4 border-2 border-blue-500 border-b-4 border-r-4 p-4 rounded-lg"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl text-black font-bold mb-4 text-center">Our Commitment to Privacy and Security</h2>
          <p className="text-md text-black leading-relaxed">
            At UNIMED, we prioritize the privacy and security of your health data. We employ cutting-edge encryption and stringent security measures to ensure that your information is safe and protected. Your trust is paramount to us, and we are committed to maintaining the highest standards of confidentiality and security throughout your health journey with us.
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;

