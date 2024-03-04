import React from 'react'

const Service_Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card w-95 bg-[#273A96] shadow-xl">
    <div className="card-body">
      <h2 className="card-title text-white text-left py-6 text-2xl">{title}</h2>
      <p class="text-left text-white">{description}</p>
    </div>
    <figure><img src={imageUrl} alt="Services" /></figure>
  </div>
  )
}

export default Service_Card