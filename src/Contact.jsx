import React from 'react';
import Navigation from './Navigation';
import { Footer } from './Footer';

const Contact = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div 
    className="hero md:flex-row min-h-screen w-full bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96% ">
      <div className="grid grid-cols-2 gap-6 p-6">
    
        <div className="border border-blue-500 border-b-4 border-r-4 p-4 rounded-lg">
          <h2 className="text-left text-xl text-black font-bold mb-2">ABEN PHILIP</h2>
          <h2 className="text-black text-left">ROLL NUMBER: B21CSB03</h2>
          <p className="text-black text-left">PHONE NUMBER: +91 88481 07148</p>
        </div>

        <div className="border border-blue-500 border-b-4 border-r-4 p-4 rounded-lg">
          <h2 className="text-left text-xl text-black font-bold mb-2">AATHIF IRSHAD</h2>
          <h2 className="text-black text-left">ROLL NUMBER: B21CSB17</h2>
          <p className="text-black text-left">PHONE NUMBER: +91 62384 23171</p>
        </div>

        <div className="border border-blue-500 border-b-4 border-r-4 p-4 rounded-lg">
          <h2 className="text-left text-xl text-black font-bold mb-2">CHAITANYA SUDHEER</h2>
          <h2 className="text-black text-left">ROLL NUMBER: B21CSB19</h2>
          <p className="text-black text-left">PHONE NUMBER: +91 97468 29320</p>
        </div>

        <div className="border border-blue-500 border-b-4 border-r-4 p-4 rounded-lg">
          <h2 className="text-left text-xl text-black font-bold mb-2">SAIRA M RAFI</h2>
          <h2 className="text-black text-left">ROLL NUMBER: B21CSB53</h2>
          <p className="text-black text-left">PHONE NUMBER: +91 85907 00674</p>
        </div>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
