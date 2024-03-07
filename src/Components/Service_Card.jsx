import React from 'react'

const Service_Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card w-90 h-50 bg-black">
    <div className="card-body">
      <h2 className="card-title text-white text-left py-2 text-2xl">{title}</h2>
      <p class="text-left text-white">{description}</p>
    </div>
    <figure ><img src={imageUrl} alt="Services" /></figure>
  </div>
  )
}
//card w-95 h-50 bg-gradient-to-r from-[#273A96] to-blue-500 shadow-2xl
export default Service_Card
