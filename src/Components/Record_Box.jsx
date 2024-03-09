import React from 'react'

const Record_Box = ({ title, description}) => {
  return (
    <div className="card w-80 h-50 bg-white py-2 border border-blue-500 border-b-4 border-r-4 p-0">
    <div className="card-body w-80 h-30">
      <h2 className="card-title text-black text-left  text-md">{title}</h2>
      <p class="text-left text-black text-sm">{description}</p>
    </div>
  </div>
  )
}

export default Record_Box