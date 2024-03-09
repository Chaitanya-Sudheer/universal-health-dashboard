import React from 'react'

const Record_Box = ({ title,onClick }) => {
  return (
    <div className="card w-80 h-50 bg-white pb-2 border border-blue-500 border-b-4 border-r-4 p-0" onClick={onClick}>
      <div className="card-body w-80 h-30">
        <h2 className="card-title text-black justify-center text-lg hover:text-blue-600">{title}</h2>
      </div>
    </div>
  )
}

export default Record_Box;




 //<p className="text-left text-black text-sm">{description}</p>