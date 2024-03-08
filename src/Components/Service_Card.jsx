import React from 'react'

const Service_Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card w-100 h-50 bg-white  border border-blue-500 border-b-4 border-r-4 p-0">
    <div className="card-body w-80 h-30">
      <h2 className="card-title text-black text-left py-2 text-l">{title}</h2>
      <p class="text-left text-black text-md">{description}</p>
    </div>
    <figure>
  <img src={imageUrl} alt="Services" className="w-80 h-50" />
</figure>

  </div>
  )
}
//card w-95 h-50 bg-gradient-to-r from-[#273A96] to-blue-500 shadow-2xl
export default Service_Card
