import React from 'react'

const Service_Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 class="text-left"className="card-title">{title}</h2>
      <p class="text-left">{description}</p>
    </div>
    <figure><img src={imageUrl} alt="Services" /></figure>
  </div>
  )
}

export default Service_Card